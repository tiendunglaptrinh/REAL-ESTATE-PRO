import React from 'react';
import classnames from 'classnames/bind';
import styles from './StatsCard.module.css';

const cx = classnames.bind(styles);

function StatsCard({ title, value, percentage, trend }) {
  return (
    <div className={cx('card')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('content')}>
        <div className={cx('value')}>{value}</div>
        <div className={cx('trend-wrapper')}>
          <div className={cx('percentage')}>{percentage}</div>
          <div className={cx('icon')}>
            <img
              src={trend === 'up' ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/9976b4bc3ef82f6140776e44a99f948ab000724e4ad730c8dc8f6cdc8372a4b6?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96' : 'https://cdn.builder.io/api/v1/image/assets/TEMP/d0d7173044039bdfa2332e538ce837d6030e589d93cec3b31cb28ed08c8ded14?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96'}
              alt={trend === 'up' ? 'Upward trend' : 'Downward trend'}
              className={cx('trend-icon')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;