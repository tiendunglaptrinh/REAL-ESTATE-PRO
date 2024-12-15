import React from 'react';
import { ProfileField } from './ProfileField';
import styles from '../styles/UserProfile.module.css';

export const ProfileDetails = ({ userData }) => {
  return (
    <section className={styles.detailsContainer} aria-label="Profile Information">
      <ProfileField 
        label="Họ và tên"
        value={userData.fullName}
        id="fullName"
      />
      <ProfileField 
        label="Tên tài khoản"
        value={userData.username}
        id="username"
      />
      <ProfileField 
        label="Email"
        value={userData.email}
        id="email"
      />
      <ProfileField 
        label="Số điện thoại"
        value={userData.phone}
        id="phone"
      />
      <ProfileField 
        label="Ngày sinh"
        value={userData.birthDate}
        id="birthDate"
      />
      <ProfileField 
        label="Số căn cước công dân"
        value={userData.idNumber}
        id="idNumber"
      />
    </section>
  );
};