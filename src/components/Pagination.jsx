import React from 'react';
import styles from '../styles/ManagePost.module.css';


export const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <nav className={styles.pagination} aria-label="Pagination">
    <button
      className={styles.pageButton}
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      aria-label="Previous page"
    >
     
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
      <button
        key={page}
        className={styles.pageButton}
        onClick={() => onPageChange(page)}
        aria-current={currentPage === page ? 'page' : undefined}
        aria-label={`Page ${page}`}
      >
        {page}
      </button>
    ))}

    <button
      className={styles.pageButton}
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      aria-label="Next page"
    >
      
    </button>
  </nav>
);