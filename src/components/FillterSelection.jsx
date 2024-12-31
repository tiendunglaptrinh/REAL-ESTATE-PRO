import React from 'react';
import classnames from 'classnames/bind';
import styles from './FillterSelection.module.css';

const cx = classnames.bind(styles);

function FilterSection() {
  return (
    <div className={cx('filterSection')}>
      <div className={cx('datePicker')} role="button" tabIndex={0}>
        <span className={cx('datePickerText')}>Chọn theo ngày</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/68efe07e9565f3b914e1ebda362daa504e77a49f1b9070f658b3e3d87d2c72c4?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96"
          className={cx('calendarIcon')}
          alt="Calendar icon"
        />
      </div>
      <button 
        type="button" 
        className={cx('filterButton')}
        aria-label="Lọc báo cáo theo ngày đã chọn"
      >
        LỌC
      </button>
    </div>
  );
}

export default FilterSection;