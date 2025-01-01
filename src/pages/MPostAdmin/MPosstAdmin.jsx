import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './MPosstAdmin.module.css';
import UserList from '../../components/MPostUserlist';
import PostList from '../../components/MPostlist';

const cx = classnames.bind(styles);

function PostManagement({ users, posts }) {
  const [activeUserId, setActiveUserId] = useState(null); // ID người dùng đang chọn
  const [filteredPosts, setFilteredPosts] = useState([]); // Bài đăng được lọc theo người dùng
  const [activeFilter, setActiveFilter] = useState('Tất cả'); // Bộ lọc hiện tại
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 5; // Số bài đăng mỗi trang

  useEffect(() => {
    // Lọc bài đăng theo người dùng
    const userFilteredPosts = activeUserId
      ? posts.filter(post => post.userId === activeUserId) // Chỉ bài đăng của user được chọn
      : posts.filter(post => post.userId === users[0]?.id); // Mặc định bài đăng của user đầu tiên

    setFilteredPosts(userFilteredPosts);
  }, [activeUserId, posts, users]);

  // Chuyển đổi bộ lọc thành key
  const mapFilterToKey = (filter) => {
    switch (filter) {
      case 'Đang hiện thị':
        return 'active';
      case 'Tin bị ẩn':
        return 'hidden';
      case 'Hết hạn':
        return 'expired';
      case 'Đăng không thành công':
        return 'failed';
      default:
        return null; // Trường hợp 'Tất cả'
    }
  };

  // Lọc bài đăng dựa trên bộ lọc
  const displayPosts = filteredPosts.filter((post) => {
    const filterKey = mapFilterToKey(activeFilter);
    if (!filterKey) return true; // 'Tất cả' trả về tất cả bài đăng
    return post.status === filterKey; // So sánh key với `status` của bài đăng
  });

  // Tính toán bài đăng trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = displayPosts.slice(startIndex, startIndex + itemsPerPage);

  // Tổng số trang
  const totalPages = Math.ceil(displayPosts.length / itemsPerPage);

  return (
    <div className={cx('container')}>
      <div className={cx('title')}>Quản lý tin đăng</div>
      <div className={cx('content')}>
        {/* Danh sách người dùng */}
        <UserList
          users={users}
          activeUserId={activeUserId}
          onUserSelect={setActiveUserId}
        />

        {/* Danh sách bài đăng */}
        <PostList
          posts={paginatedPosts} // Truyền bài đăng đã phân trang
          activeFilter={activeFilter} // Truyền bộ lọc
          onFilterChange={setActiveFilter} // Callback thay đổi bộ lọc
          currentPage={currentPage} // Trang hiện tại
          totalPages={totalPages} // Tổng số trang
          onPageChange={setCurrentPage} // Callback thay đổi trang
        />
      </div>
    </div>
  );
}

export default PostManagement;