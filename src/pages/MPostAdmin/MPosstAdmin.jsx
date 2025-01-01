import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './MPosstAdmin.module.css';
import UserList from '../../components/MPostUserlist';
import PostList from '../../components/MPostlist';

const cx = classnames.bind(styles);

function PostManagement() {
  const [activeUserId, setActiveUserId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const users = [
    {
      id: 1,
      name: 'Nguyễn Minh Thanh',
      phone: '0968 523 681',
      email: 'nguyenminh0326@gmail.com',
      avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9c4b52acf64e52222dcbf375ad9e45f5ca715c58cf0dad4e96269c4d2eea751b?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96'
    },
    {
        id: 5,
        name: 'Nguyễn Minh Thanh',
        phone: '0968 523 681',
        email: 'nguyenminh0326@gmail.com',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9c4b52acf64e52222dcbf375ad9e45f5ca715c58cf0dad4e96269c4d2eea751b?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96'
      },
      {
        id: 2,
        name: 'Nguyễn Minh Thanh',
        phone: '0968 523 681',
        email: 'nguyenminh0326@gmail.com',
        avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9c4b52acf64e52222dcbf375ad9e45f5ca715c58cf0dad4e96269c4d2eea751b?placeholderIfAbsent=true&apiKey=ca5fd28923164936b76d617660c85d96'
      }
  ];

  const posts = [
    {
      id: '41461881',
      title: 'Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL',
      address: 'Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng',
      status: 'active',
      statusText: 'Đang hiện thị',
      postDate: '07/11/2024',
      expiryDate: '22/11/2024',
    },
    {
        id: '41461881',
        title: 'Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL',
        address: 'Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng',
        status: 'failed',
        statusText: 'Đăng không thành công',
        postDate: '07/11/2024',
        expiryDate: '22/11/2024',
      },{
        id: '41461881',
        title: 'Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL',
        address: 'Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng',
        status: 'active',
        statusText: 'Đang hiện thị',
        postDate: '07/11/2024',
        expiryDate: '22/11/2024',
      },{
        id: '41461881',
        title: 'Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL',
        address: 'Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng',
        status: 'expired',
        statusText: 'Hết hạn',
        postDate: '07/11/2024',
        expiryDate: '22/11/2024',
      }
  ];

  return (
    <div className={cx('container')}>
      <div className={cx('title')}>Quản lý tin đăng</div>
      <div className={cx('content')}>
        <UserList
          users={users}
          activeUserId={activeUserId}
          onUserSelect={setActiveUserId}
        />
        <PostList
          posts={posts}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>
    </div>
  );
}

export default PostManagement;