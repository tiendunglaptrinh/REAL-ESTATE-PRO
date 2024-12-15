import React from 'react';
import styles from '../styles/ManagePost.module.css';



const FILTERS = [
  { id: 'all', label: 'Tất cả' },
  { id: 'active', label: 'Đang hiện thị' },
  { id: 'expired', label: 'Hết hạn' },
  { id: 'failed', label: 'Đăng không thành công' },
  { id: 'hidden', label: 'Tin bị ẩn' }
];

export const PostHeader = ({ activeFilter, onFilterChange }) => (
  <header className={styles.postHeader}>
    <h1 className={styles.postTitle}>Danh sách tin đăng</h1>
    <div className={styles.filterTabs} role="tablist">
      {FILTERS.map(filter => (
        <button
          key={filter.id}
          role="tab"
          className={styles.filterTab}
          aria-selected={activeFilter === filter.id}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  </header>
);