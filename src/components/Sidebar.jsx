import React from 'react';
import styles from '../styles/ManagePost.module.css';
import List from '../assets/Icons/List.png';
import Money from '../assets/Icons/Stack of Money.png';
import Cheque from '../assets/Icons/Cheque.png';
import Contacts from '../assets/Icons/Contacts.png';
import User from '../assets/Icons/User Male.png';
import OpenPane from '../assets/Icons/Open Pane.png';

export const Sidebar = ({ userData }) => (
  <aside className={styles.sidebar}>
    <div className={styles.userProfile}>
      <img 
        src={userData.userImage}
        alt={userData.userName}
        className={styles.userAvatar}
      />
      <h2 className={styles.userName}>{userData.userName}</h2>
    </div>

    <div className={styles.accountInfo}>
      <h3 className={styles.accountInfoTitle}>Thông tin tài khoản</h3>
      
      <div className={styles.accountStat}>
        <span className={styles.accountStatLabel}>Số dư tài khoản</span>
        <span className={styles.accountStatValue}>{userData.balance}</span>
      </div>
      
      <div className={styles.accountStat}>
        <span className={styles.accountStatLabel}>Số lượng bài đăng</span>
        <span className={styles.accountStatValue}>{userData.postCount}</span>
      </div>
      
      <div className={styles.accountStat}>
        <span className={styles.accountStatLabel}>Lượt thích</span>
        <span className={styles.accountStatValue}>{userData.likes}</span>
      </div>
      
      <div className={styles.accountStat}>
        <span className={styles.accountStatLabel}>Đánh giá trung bình</span>
        <span className={styles.accountStatValue}>{userData.rating}</span>
      </div>

      <button className={styles.actionButton}>
        <img src={Money}alt="" className={styles.actionIcon} />
        <span>Nạp tiền</span>
      </button>
    </div>

    <nav>
      <button className={styles.navButton} aria-current="page">
        <img src={List} alt="" className={styles.navIcon} />
        <span>Quản lý tin đăng</span>
      </button>

      <button className={styles.navButton}>
        <img src={Contacts} alt="" className={styles.navIcon} />
        <span>Quản lý khách hàng</span>
      </button>

      <button className={styles.navButton}>
        <img src={Cheque} alt="" className={styles.navIcon} />
        <span>Quản lý tài chính</span>
      </button>

      <button className={styles.navButton}>
        <img src={User} alt="" className={styles.navIcon} />
        <span>Quản lý tài khoản</span>
      </button>

      <button className={styles.navButton}>
        <img src={OpenPane} alt="" className={styles.navIcon} />
        <span>Đăng xuất</span>
      </button>
    </nav>
  </aside>
);