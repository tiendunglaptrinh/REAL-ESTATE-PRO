import React from 'react';
import classnames from 'classnames/bind';
import styles from './MPostUserlist.module.css';
import UserCard from './MPostUsercard';

const cx = classnames.bind(styles);

function UserList({ users, activeUserId, onUserSelect }) {
  return (
    <div className={cx('userList')}>
      <div className={cx('title')}>Danh sách User</div>
      
      <div className={cx('searchContainer')}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3cf815425b914a1aa79b8003a725ca12d984e4f58dd5a10bcfbb58002bfdb44?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96" 
          alt="Search icon"
          className={cx('searchIcon')} 
        />
        <div className={cx('searchText')}>Tìm kiếm</div>
      </div>

      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          isActive={user.id === activeUserId}
          onClick={() => onUserSelect(user.id)}
        />
      ))}
    </div>
  );
}

export default UserList;