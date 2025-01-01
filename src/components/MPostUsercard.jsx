import React from 'react';
import classnames from 'classnames/bind';
import styles from './MPostUsercard.module.css';

const cx = classnames.bind(styles);

function UserCard({ user, isActive, onClick }) {
  return (
    <div 
      className={cx('userCard', { active: isActive })}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className={cx('avatar')}
      />
      <div className={cx('userInfo')}>
        <div className={cx('name')}>{user.name}</div>
        <div className={cx('contact')}>{user.phone}</div>
        <div className={cx('contact')}>{user.email}</div>
      </div>
    </div>
  );
}

export default UserCard;