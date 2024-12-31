import React from 'react';
import classnames from 'classnames/bind';
import styles from './NewCardAdmin.module.css';
import Edit from '../assets/Icons/Edit.png';
import Hide from '../assets/Icons/Hide.png';

const cx = classnames.bind(styles);

const NewsCard = ({ image, title, description, newsId, publishDate, lastUpdate }) => {
  return (
    <article className={cx('newsCard')} aria-labelledby={`news-title-${newsId}`}>
      <div className={cx('imageWrapper')}>
        <img loading="lazy" src={image} alt="" className={cx('newsImage')} />
      </div>
      <div className={cx('contentWrapper')}>
        <div className={cx('newsContent')}>
          <h2 id={`news-title-${newsId}`} className={cx('newsTitle')}>{title}</h2>
          <p className={cx('newsDescription')}>{description}</p>
          <dl className={cx('metaInfo')}>
            <div className={cx('metaItem')}>
              <dt className={cx('metaLabel')}>Mã tin tức</dt>
              <dd className={cx('metaValue')}>{newsId}</dd>
            </div>
            <div className={cx('metaItem')}>
              <dt className={cx('metaLabel')}>Ngày đăng</dt>
              <dd className={cx('metaValue')}>{publishDate}</dd>
            </div>
            <div className={cx('metaItem')}>
              <dt className={cx('metaLabel')}>Cập nhật lần cuối</dt>
              <dd className={cx('metaValue')}>{lastUpdate}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className={cx('actionButtons')}>
        <button className={cx('editButton')} aria-label="Sửa tin">
          <img src={Edit} alt="" className={cx('buttonIcon')} />
          <span>Sửa tin</span>
        </button>
        <button className={cx('hideButton')} aria-label="Ẩn tin">
          <img src={Hide} alt="" className={cx('buttonIcon')} />
          <span>Ẩn tin</span>
        </button>
      </div>
    </article>
  );
};

export default NewsCard;