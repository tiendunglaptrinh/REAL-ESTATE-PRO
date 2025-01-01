import React from 'react';
import classnames from 'classnames/bind';
import styles from './RevenueChart.module.css';

const cx = classnames.bind(styles);

const categories = ['Đất', 'Nhà phố', 'Thuê đất', 'Chung cư', 'Mặt bằng', 'Khác'];
const values = [200, 500, 300, 640, 100, 400];

const colors = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40']; // Mảng màu

// Hàm tính trục Y
const calculateYAxis = (maxValue, steps) => {
  const interval = Math.ceil(maxValue / steps); // Chia đều các khoảng
  return Array.from({ length: steps + 1 }, (_, i) => i * interval).reverse();
};

function RevenueChart() {
  const maxValue = Math.max(...values); // Giá trị lớn nhất
  const adjustedMaxValue = Math.ceil(maxValue * 1.2); // Tăng giá trị lớn nhất lên 10%
  const yAxisValues = calculateYAxis(adjustedMaxValue, 3); // Chia làm 3 khoảng (3 bước)

  return (
    <div className={cx('revenue-chart')}>
      <h2 className={cx('title')}>Danh thu theo sản phẩm</h2>
      <div className={cx('chart')}>
        <div className={cx('y-axis')}>
          {yAxisValues.map((value, index) => (
            <div key={index}>{value} Triệu</div>
          ))}
        </div>
        <div className={cx('bars')}>
          {categories.map((category, index) => (
            <div key={category} className={cx('bar-group')}>
              <div className={cx('tooltip')}>{values[index]}</div>
              <div
                className={cx('bar')}
                style={{
                  height: `${(values[index] / adjustedMaxValue) * 300}px`, // Dùng adjustedMaxValue để tính chiều cao cột
                  backgroundColor: colors[index % colors.length], // Lấy màu từ mảng
                }}
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
