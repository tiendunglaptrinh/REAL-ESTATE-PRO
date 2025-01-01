import React from 'react';
import NewsCard from '../../components/NewCardAdmin';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/AdminSliderbarr';
import styles from './NewManageAdmin.module.css';

const newsData = [
  {
    id: '41461881',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c7b192d76f388a2ecaf563d34c8a126ebae439165d46c52f10d97fb2746ed7e?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96',
    title: 'Giải Pháp Tài Chính Đột Phá, Mua Nhà Sài Gòn Chỉ Từ 450 Triệu Đồng',
    description: 'Theo báo cáo quý 3/2024 của Bộ Xây dựng, giá bất động sản tại một số địa phương, đặc biệt là Hà Nội, TP.HCM và các đô thị lớn tiếp tục có xu hướng tăng, bất chấp nguồn cung có dấu hiệu cải thiện. Giá căn hộ chung cư đã tăng từ 35 – 40% so với quý trước, tùy thuộc vào vị trí. Đáng chú ý, phân khúc căn hộ bình dân dưới 40 triệu đồng/m² gần như vắng bóng giao dịch và sản phẩm trên thị trường.',
    publishDate: '07/11/2024',
    lastUpdate: '22/11/2024'
  },
  {
    id: '41461882',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/259ee8b7943deda69846cb1ba1a156abda02e9b791c9d683d0cc413ac8ad7d05?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96',
    title: 'Căn Hộ Chung Cư Các Thị Trường Vệ Tinh Phía Nam',
    description: 'Căn hộ chung cư các thị trường vệ tinh, vùng ven TP.HCM đang trở thành tâm điểm đầu tư cuối năm 2024. Lợi thế giá mềm, đáp ứng nguồn cầu ở thực cao, đặc biệt trong bối cảnh giá căn hộ tại TP.HCM tăng cao khiến căn hộ chung cư các thị trường vệ tinh thu hút người mua ở thực và giới đầu tư.',
    publishDate: '07/11/2024',
    lastUpdate: '22/11/2024'
  },
  {
    id: '41461882',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/259ee8b7943deda69846cb1ba1a156abda02e9b791c9d683d0cc413ac8ad7d05?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96',
    title: 'Căn Hộ Chung Cư Các Thị Trường Vệ Tinh Phía Nam',
    description: 'Căn hộ chung cư các thị trường vệ tinh, vùng ven TP.HCM đang trở thành tâm điểm đầu tư cuối năm 2024. Lợi thế giá mềm, đáp ứng nguồn cầu ở thực cao, đặc biệt trong bối cảnh giá căn hộ tại TP.HCM tăng cao khiến căn hộ chung cư các thị trường vệ tinh thu hút người mua ở thực và giới đầu tư.',
    publishDate: '07/11/2024',
    lastUpdate: '22/11/2024'
  },
  {
    id: '41461882',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/259ee8b7943deda69846cb1ba1a156abda02e9b791c9d683d0cc413ac8ad7d05?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96',
    title: 'Căn Hộ Chung Cư Các Thị Trường Vệ Tinh Phía Nam',
    description: 'Căn hộ chung cư các thị trường vệ tinh, vùng ven TP.HCM đang trở thành tâm điểm đầu tư cuối năm 2024. Lợi thế giá mềm, đáp ứng nguồn cầu ở thực cao, đặc biệt trong bối cảnh giá căn hộ tại TP.HCM tăng cao khiến căn hộ chung cư các thị trường vệ tinh thu hút người mua ở thực và giới đầu tư.',
    publishDate: '07/11/2024',
    lastUpdate: '22/11/2024'
  }
];

function NewsManagement() {
  return (
    <main className={styles.newsManagement}>
        {/* <Sidebar /> */}
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Quản lý tin tức</h1>
        
        <div className={styles.newsList}>
          {newsData.map(news => (
            <NewsCard
              key={news.id}
              image={news.image}
              title={news.title}
              description={news.description}
              newsId={news.id}
              publishDate={news.publishDate}
              lastUpdate={news.lastUpdate}
            />
          ))}
        </div>
        
        <Pagination currentPage={1} totalPages={7} />
      </div>
    </main>
  );
}

export default NewsManagement;