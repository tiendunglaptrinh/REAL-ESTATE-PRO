import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './MPostUserlist.module.css';
import UserCard from './MPostUsercard';
import Search from '../assets/Icons/Search.png';

const cx = classnames.bind(styles);

function UserList({ users, activeUserId, onUserSelect }) {
  useEffect(() => {
    if (!activeUserId && users.length > 0) {
      onUserSelect(users[0].id); // Luôn chọn user đầu tiên nếu chưa chọn
    }
  }, [activeUserId, users, onUserSelect]);

  return (
    <div className={cx('userList')}>
      <div className={cx('title')}>Danh sách User</div>
      
      <div className={cx('searchContainer')}>
        <img 
          src={Search}
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
