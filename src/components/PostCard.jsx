import React from 'react';
import styles from '../styles/ManagePost.module.css';
import Eye from '../assets/Icons/Eye.png';
import Edit from '../assets/Icons/Edit.png';
import PocketWatch from '../assets/Icons/Pocket Watch.png';
import Hide from '../assets/Icons/Hide.png';

export const PostCard = ({
  image,
  status,
  title,
  address,
  price,
  area,
  bedrooms,
  postId,
  postDate,
  expiryDate,
  isHidden,
  onExtend,
  onEdit,
  onToggleVisibility
}) => (
  <article className={styles.postCard}>
    <img src={image} alt="" className={styles.postImage} />
    
    <div className={styles.postDetails}>
      <div className={styles.postTitle}>
        <div className={`${styles.postStatus} ${styles[`status${status.charAt(0).toUpperCase() + status.slice(1)}`]}`}>
          {status === "active" ? "Đang hiện thị" :
            status === "hidden" ? "Tin bị ẩn" :
            status === "expired" ? "Hết hạn" :
            status === "failed" ? "Đăng không thành công" :
            status}
        </div>
        
        <div className={styles.postInfo}>
          <h2 className={styles.postTitle}>{title}</h2>
          <p className={styles.postAddress}>{address}</p>
        </div>
      </div>

      <div className={styles.postStats}>
        <div className={styles.postStat}>
          <span className={styles.postStatLabel}>Mức giá</span>
          <span className={styles.postStatValue}>{price}</span>
        </div>
        <div className={styles.postStat}>
          <span className={styles.postStatLabel}>Diện tích</span>
          <span className={styles.postStatValue}>{area}</span>
        </div>
        <div className={styles.postStat}>
          <span className={styles.postStatLabel}>Phòng ngủ</span>
          <span className={styles.postStatValue}>{bedrooms}</span>
        </div>
      </div>
      
      <div className={styles.postMeta}>
        <div className={styles.postStat}>
          <span className={styles.postStatLabel}>Mã tin</span>
          <span className={styles.postStatValue}>{postId}</span>
        </div>
        <div className={styles.postStat}>
          <span className={styles.postStatLabel}>Ngày đăng</span>
          <span className={styles.postStatValue}>{postDate}</span>
        </div>
        <div className={styles.postStat}>
          <span className={styles.postStatLabel}>Ngày hết hạn</span>
          <span className={styles.postStatValue}>{expiryDate}</span>
        </div>
      </div>
    </div>
    
    <div className={styles.postActions}>
      <button onClick={onExtend} className={styles.actionButton}>
        <img src={PocketWatch} alt="" className={styles.actionIcon} />
        <span>Gia hạn</span>
      </button>
      
      <button onClick={onEdit} className={styles.actionButton}>
        <img src={Edit} alt="" className={styles.actionIcon} />
        <span>Sửa tin</span>
      </button>
      
      <button onClick={onToggleVisibility} className={styles.actionButton}>
        <img 
          src={isHidden ? Eye:Hide}
          alt=""
          className={styles.actionIcon}
        />
        <span>{isHidden ? "Bật tin" : "Ẩn tin"}</span>
      </button>
    </div>
  </article>
);