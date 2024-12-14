import React from 'react';
import styles from '../styles/ManagePost.module.css';
import Home from '../assets/Icons/Home.png';
import RightL from '../assets/Icons/RightL.png';
import GT from '../assets/Icons/GT.png';

export const Breadcrumb = () => (
  <nav className={styles.breadcrumb} aria-label="Breadcrumb">
    <div className={styles.breadcrumbContent}>
      <img src={Home} alt="" className={styles.breadcrumbIcon} />
      <img src={GT} alt="" className={styles.breadcrumbIcon} />
      <span>User</span>
      <img src={GT} alt="" className={styles.breadcrumbIcon} />
      <span>Quản lý tin đăng</span>
    </div>
  </nav>
);