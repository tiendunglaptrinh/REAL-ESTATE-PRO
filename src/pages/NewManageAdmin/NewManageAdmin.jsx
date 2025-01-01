import React, { useState } from 'react';
import NewsCard from '../../components/NewCardAdmin';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/AdminSliderbarr';
import styles from './NewManageAdmin.module.css';

function NewsManagement({ news }) {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 4; // Số lượng tin tức mỗi trang

  const totalPages = Math.ceil(news.length / itemsPerPage); 
  const currentNews = news.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className={styles.newsManagement}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Quản lý tin tức</h1>
        <div className={styles.newsList}>
          {currentNews.map(newsItem => (
            <NewsCard
              key={newsItem.id}
              image={newsItem.image}
              title={newsItem.title}
              description={newsItem.description}
              newsId={newsItem.id}
              publishDate={newsItem.publishDate}
              lastUpdate={newsItem.lastUpdate}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}

export default NewsManagement;
