import React from 'react';
import classnames from 'classnames/bind';
import styles from './MPostcard.module.css';
import Edit from '../assets/Icons/Edit.png';
import Hide from '../assets/Icons/Hide.png';

const cx = classnames.bind(styles);

function PostCard({ post }) {
  const getStatusClass = (status) => {
    switch (status) {
      case 'active': return 'active';
      case 'hidden': return 'hidden';
      case 'expired': return 'expired';
      case 'failed': return 'failed';
      default: return '';
    }
  };

  return (
    <div className={cx('postCard')}>
      <div className={cx('mainContent')}>
        <div className={cx('header')}>
          <div className={cx('statusBadge', getStatusClass(post.status))}>
            {post.statusText}
          </div>
          <div>
            <div className={cx('title')}>{post.title}</div>
            <div className={cx('address')}>{post.address}</div>
          </div>
        </div>
        
        <div className={cx('details')}>
          <div className={cx('detailItem')}>
            <div className={cx('detailLabel')}>Mã tin</div>
            <div className={cx('detailValue')}>{post.id}</div>
          </div>
          <div className={cx('detailItem')}>
            <div className={cx('detailLabel')}>Ngày đăng</div>
            <div className={cx('detailValue')}>{post.postDate}</div>
          </div>
          <div className={cx('detailItem')}>
            <div className={cx('detailLabel')}>Ngày hết hạn</div>
            <div className={cx('detailValue')}>{post.expiryDate}</div>
          </div>
        </div>
      </div>

      <div className={cx('actions')}>
        <button className={cx('actionButton')}>
          <img
            src={Edit}
            alt="Edit post"
            className={cx('actionIcon')}
          />
          <span>Sửa tin</span>
        </button>
        <button className={cx('actionButton')}>
          <img
            src={Hide}
            alt={post.status === 'hidden' ? 'Show post' : 'Hide post'}
            className={cx('actionIcon')}
          />
          <span>{post.status === 'hidden' ? 'Bật tin' : 'Ẩn tin'}</span>
        </button>
      </div>
    </div>
  );
}

export default PostCard;