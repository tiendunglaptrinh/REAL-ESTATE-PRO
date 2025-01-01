import React from 'react';
import classnames from 'classnames/bind';
import styles from './MPostlist.module.css';
import PostCard from './MPostcard';
import Pagination from './Pagination';

const cx = classnames.bind(styles);

function PostList({ posts, activeFilter, onFilterChange }) {
  const filters = ['Tất cả', 'Đang hiện thị', 'Hết hạn', 'Đăng không thành công', 'Tin bị ẩn'];
  
  return (
    <div className={cx('postList')}>
      <div className={cx('header')}>
        <div className={cx('title')}>Danh sách tin đăng</div>
        <div className={cx('filterTabs')}>
          {filters.map(filter => (
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

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}

        <Pagination currentPage={1} totalPages={7}/>
    </div>
  );
}

export default PostList;