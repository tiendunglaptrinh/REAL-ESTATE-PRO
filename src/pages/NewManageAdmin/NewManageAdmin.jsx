import React from 'react';
import NewsCard from '../../components/NewCardAdmin';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/AdminSliderbarr';
import styles from './NewManageAdmin.module.css';

function NewsManagement({ news }) {
  if (!news) return null;
  return (
    <main className={styles.newsManagement}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Quản lý tin tức</h1>
        <div className={styles.newsList}>
          {news.map(newsItem => (
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
        <Pagination currentPage={1} totalPages={7} />
      </div>
    </main>
  );
}

export default NewsManagement;