import { useState } from 'react';

export const useProfileData = () => {
  const [userData] = useState({
    fullName: 'Vũ Thanh Vân',
    username: 'vuthanhvan123',
    email: 'vuthanhvan123@gmail.com',
    phone: '0968518256',
    birthDate: '01/01/2000',
    idNumber: '0813214554896',
    avatarUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3797556cdbe3016ae3ed963005ff957c7f4d3c9941316d5375a876c256a1b7?placeholderIfAbsent=true&apiKey=f21b6fc2c4dd444391bd53edacfada1b'
  });

  const handleEdit = () => {
    // Production edit handler implementation would go here
  };

  return {
    userData,
    handleEdit
  };
};