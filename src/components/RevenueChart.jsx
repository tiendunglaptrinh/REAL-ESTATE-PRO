import React from 'react';
import classnames from 'classnames/bind';
import styles from './RevenueChart.module.css';

const cx = classnames.bind(styles);

const categories = ['Đất', 'Nhà phố', 'Thuê đất', 'Chung cư', 'Mặt bằng', 'Khác'];
const values = [2000, 5000, 3000, 6000, 1000, 4000];

function RevenueChart() {
  return (
    <div className={cx('revenue-chart')}>
      <h2 className={cx('title')}>Danh thu theo sản phẩm</h2>
      <div className={cx('chart')}>
        <div className={cx('y-axis')}>
          <div>30 Tỷ</div>
          <div>20 Tỷ</div>
          <div>10 Tỷ</div>
          <div>0</div>
        </div>
        <div className={cx('bars')}>
          {categories.map((category, index) => (
            <div key={category} className={cx('bar-group')}>
              <div className={cx('tooltip')}>{values[index]}</div>
              <div 
                className={cx('bar')} 
                style={{height: `${(values[index]/6000) * 100}%`}}
                role="graphics-symbol"
                aria-label={`${category}: ${values[index]}`}
              />
              <div className={cx('label')}>{category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevenueChart;