import React from 'react';
import classnames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import styles from './AdminSliderbarr.module.css';

const cx = classnames.bind(styles);

const menuItems = [
  { label: 'Trang chủ', to: '/dashboard' },
  { label: 'Người dùng', to: '/users' },
  { label: 'Báo cáo vi phạm', to: '/reports' },
  { label: 'Tin tức', to: '/newsmanage' },
  { label: 'Doanh thu', to: '/revenue' },
  { label: 'Tin đăng', to: '/posts' }
];

const adminInfo = {
  avatarUrl: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/471950080_122207659274202343_177675581301692562_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=9vPRJu1TcaUQ7kNvgFvcx6x&_nc_oc=Adiz2Ug_KZ-PMeNfjqbvmFLrr7siLjbSOg1O-IQlqYjR73IQYJIrzoYpFRXL7xocG8I&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AK_s02nyPay0JzWI1tV5s7d&oh=00_AYDNJO0qDtRIow9PMBsjsTTSEFuXI9omOWv6YgZ3TuIU_w&oe=67790B15',
  name: 'ADMIN2, Quản lý cấp 2'
};

function Sidebar() {
  const location = useLocation();

  return (
    <nav className={cx('sidebar')} role="navigation" aria-label="Main navigation">
      <div className={cx('profile')}>
        <img
          src={adminInfo.avatarUrl}
          alt="Admin profile"
          className={cx('avatar')}
        />
        <div className={cx('user-info')}>{adminInfo.name}</div>
        <div className={cx('divider')} />
      </div>
      <ul className={cx('menu')}>
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className={cx('menu-item', { 
                active: location.pathname === item.to 
              })}
              aria-current={location.pathname === item.to ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;