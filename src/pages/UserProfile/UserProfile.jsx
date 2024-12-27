import React from 'react';
import { ProfileHeader } from '../components/ProfileHeader';
import { ProfileDetails } from '../components/ProfileDetails';
import { useProfileData } from '../hooks/useUserProfile';
import styles from '../styles/UserProfile.module.css';

export const UserProfile = () => {
  const { userData, handleEdit } = useProfileData();

  return (
    <main className={styles.profileContainer} role="main">
      <ProfileHeader 
        name={userData.fullName}
        email={userData.email}
        avatarUrl={userData.avatarUrl}
        onEdit={handleEdit}
      />
      <ProfileDetails userData={userData} />
    </main>
  );
};