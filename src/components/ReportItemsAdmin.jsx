import React from 'react';
import classnames from 'classnames/bind';
import styles from './ReportItemsAdmin.module.css';

const cx = classnames.bind(styles);

function ReportItem({ number, reportId, postId, title, reason, date }) {
  return (
    <div className={cx('reportItem')} role="listitem">
      <div className={cx('itemLeft')}>
        <div>{number}</div>
        <div>{reportId}</div>
      </div>
      <div>{postId}</div>
      <div className={cx('itemContent')}>
        <div className={cx('postTitle')}>{title}</div>
        <div className={cx('reason')}>{reason}</div>
        <div className={cx('date')}>{date}</div>
        <button 
          className={cx('detailButton')} 
          type="button"
          aria-label={`Xem chi tiết báo cáo ${reportId}`}
        >
          Chi tiết
        </button>
      </div>
    </div>
  );
}

export default ReportItem;