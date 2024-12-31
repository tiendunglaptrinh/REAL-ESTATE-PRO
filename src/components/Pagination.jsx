import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button className={styles.paginationArrow} aria-label="Previous page">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04a4da67411d534c9930a1944b550b63125b55819129e2125e592eab1316531?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96" alt="" className={styles.paginationIcon} />
      </button>
      
      {pages.map(page => (
        <button
          key={page}
          className={`${styles.paginationButton} ${page === currentPage ? styles.active : ''}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      
      <button className={styles.paginationArrow} aria-label="Next page">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/76beb4fedd56a5cd8dfcf58cb8106531565d0be71b0bac034db8f933c6aaeed1?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96" alt="" className={styles.paginationIcon} />
      </button>
    </nav>
  );
};

export default Pagination;