import React from 'react';
import styles from '../styles/UserProfile.module.css';

export const ProfileHeader = ({ name, email, avatarUrl, onEdit }) => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.userInfo}>
        <img
          loading="lazy"
          src={avatarUrl}
          className={styles.avatar}
          alt={`Profile picture of ${name}`}
          width="80"
          height="80"
        />
        <div className={styles.userDetails}>
          <h1 className={styles.userName}>{name}</h1>
          <div className={styles.userEmail} aria-label="Email address">{email}</div>
        </div>
      </div>
      <button 
        onClick={onEdit}
        className={styles.editButton}
        aria-label="Edit profile information"
      >
        Chỉnh sửa
      </button>
    </header>
  );
};