import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './MPosstAdmin.module.css';
import UserList from '../../components/MPostUserlist';
import PostList from '../../components/MPostlist';

const cx = classnames.bind(styles);

function PostManagement({ users, posts }) {
  const [activeUserId, setActiveUserId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  if (!users || !posts) return null;

  return (
    <div className={cx('container')}>
      <div className={cx('title')}>Quản lý tin đăng</div>
      <div className={cx('content')}>
        <UserList
          users={users}
          activeUserId={activeUserId}
          onUserSelect={setActiveUserId}
        />
        <PostList
          posts={posts}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>
    </div>
  );
}

export default PostManagement;