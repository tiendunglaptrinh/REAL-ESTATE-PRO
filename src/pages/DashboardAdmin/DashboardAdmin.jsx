import React from 'react';
import classnames from 'classnames/bind';
import Sidebar from '../../components/AdminSliderbarr';
import StatsCard from '../../components/StatsCard';
import RegionStats from '../../components/RegionStats';
import RevenueChart from '../../components/RevenueChart';
import styles from './DashBoardAdmin.module.css';

const cx = classnames.bind(styles);

const statsData = [
  {
    title: 'Tổng số bài đăng',
    value: '1,234',
    percentage: '+11.01%',
    trend: 'up'
  },
  {
    title: 'Lượt truy cập',
    value: '5,678',
    percentage: '-0.03%',
    trend: 'down'
  },
  {
    title: 'Số lượt đăng ký mới',
    value: '890',
    percentage: '+15.03%',
    trend: 'up'
  },
  {
    title: 'Tổng số tài khoản user',
    value: '2,345',
    percentage: '+6.08%',
    trend: 'up'
  }
];

function Dashboard() {
  return (
    <main className={cx('dashboard')} role="main">
      <div className={cx('layout')}>
        {/* <Sidebar /> */}
        <div className={cx('content')}>
          <div className={cx('stats-grid')}>
            {statsData.map((stat) => (
              <StatsCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                percentage={stat.percentage}
                trend={stat.trend}
              />
            ))}
          </div>
          <div className={cx('charts-grid')}>
            <RevenueChart />
            <RegionStats />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;