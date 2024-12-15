import React from 'react';
import styles from '../styles/UserProfile.module.css';

export const ProfileField = ({ label, value, id }) => {
  return (
    <div className={styles.formField}>
      <label className={styles.fieldLabel} htmlFor={id}>{label}</label>
      <div 
        id={id}
        className={styles.fieldValue}
        role="textbox"
        aria-readonly="true"
      >
        {value}
      </div>
    </div>
  );
};