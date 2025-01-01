import React from 'react';
import classnames from 'classnames/bind';
import Sidebar from '../../components/AdminSliderbarr';
import StatsCard from '../../components/StatsCard';
import RegionStats from '../../components/RegionStats';
import RevenueChart from '../../components/RevenueChart';
import styles from './DashBoardAdmin.module.css';

const cx = classnames.bind(styles);

function Dashboard({ statsData }) {
  if (!statsData) return null;
  return (
    <main className={cx('dashboard')} role="main">
      <div className={cx('layout')}>
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