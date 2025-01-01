import React from 'react';
import styles from './Pagination.module.css';
import Right from '../assets/Icons/GT.png';
import Left from '../assets/Icons/GT0.png';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page); 
    }
  };

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.paginationArrow}
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <img src={Left} alt="" className={styles.paginationIcon} />
      </button>

      {pages.map(page => (
        <button
          key={page}
          className={`${styles.paginationButton} ${page === currentPage ? styles.active : ''}`}
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={styles.paginationArrow}
        aria-label="Next page"
        disabled={currentPage === totalPages} 
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <img src={Right} alt="" className={styles.paginationIcon} />
      </button>
    </nav>
  );
};

export default Pagination;
