import React from 'react';
import classnames from 'classnames/bind';
import styles from './RegionStats.module.css';

const cx = classnames.bind(styles);

const regions = [
  { name: 'TP. Hồ Chí Minh', percentage: '52.1%', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eef1f6fced8ed42a18cb238b4e863477ef27e1bc0bd0a74dfe8db3f4971709e7?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96' },
  { name: 'Hà Nội', percentage: '22.8%', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dbf6ebe43a4ed92ce53b5cb1015e0ef30cff0dae6e5223b5d909eef4805be62b?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96' },
  { name: 'Đà Nẵng', percentage: '13.9%', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/12009b3f7b400650e6fe331595cc1218d80d83024d9b99956ff544491d5cb2d5?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96' },
  { name: 'Khác', percentage: '11.2%', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/06689844dce040ae996c1f9b944ac62675d009f66c452f0ea259558b44097bcf?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96' }
];

function RegionStats() {
  return (
    <div className={cx('region-stats')}>
      <h2 className={cx('title')}>Bài viết theo vùng</h2>
      <div className={cx('content')}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/099b77d1f839854fde1d285a664cffb4a07ec3f303239f809a137fb89aa150cc?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96"
          alt="Region distribution map"
          className={cx('map')}
        />
        <div className={cx('stats-list')}>
          {regions.map((region) => (
            <div key={region.name} className={cx('stat-item')}>
              <div className={cx('region')}>
                <img src={region.icon} alt={region.name} className={cx('icon')} />
                <span className={cx('name')}>{region.name}</span>
              </div>
              <span className={cx('percentage')}>{region.percentage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RegionStats;