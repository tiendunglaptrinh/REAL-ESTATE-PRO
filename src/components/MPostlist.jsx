import React from 'react';
import classnames from 'classnames/bind';
import styles from './MPostlist.module.css';
import PostCard from './MPostcard';
import Pagination from './Pagination';

const cx = classnames.bind(styles);

function PostList({ posts, activeFilter, onFilterChange, currentPage, totalPages, onPageChange }) {
  const filters = ['Tất cả', 'Đang hiện thị', 'Hết hạn', 'Đăng không thành công', 'Tin bị ẩn'];

  return (
    <div className={cx('postList')}>
      {/* Tiêu đề và bộ lọc */}
      <div className={cx('header')}>
        <div className={cx('title')}>Danh sách tin đăng</div>
        <div className={cx('filterTabs')}>
          {filters.map((filter) => (
            <div
              key={filter}
              className={cx({ activeTab: filter === activeFilter })}
              onClick={() => onFilterChange(filter)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onFilterChange(filter);
                }
              }}
            >
              {filter}
            </div>
          ))}
        </div>
      </div>

      {/* Danh sách bài đăng */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {/* Phân trang */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default PostList;
