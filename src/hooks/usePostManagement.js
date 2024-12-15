import { useState, useCallback } from 'react';

const MOCK_POSTS = [
  {
    id: 1,
    image: "https://file4.batdongsan.com.vn/2024/12/12/20241212113400-7177_wm.jpg",
    status: "active",
    title: "Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL",
    address: "Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng",
    price: "3,6 tỷ",
    area: "78,3 m²",
    bedrooms: "3 PN",
    postId: "41461881",
    postDate: "07/11/2024",
    expiryDate: "22/11/2024",
    isHidden: false
  },
  {
    id: 1909,
    image: "https://file4.batdongsan.com.vn/2024/12/12/20241212113400-7177_wm.jpg",
    status: "hidden",
    title: "Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL",
    address: "Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng",
    price: "3,6 tỷ",
    area: "78,3 m²",
    bedrooms: "3 PN",
    postId: "41461881",
    postDate: "07/11/2024",
    expiryDate: "22/11/2024",
    isHidden: false
  },
  {
    id: 17868,
    image: "https://file4.batdongsan.com.vn/2024/12/12/20241212113400-7177_wm.jpg",
    status: "expired",
    title: "Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL",
    address: "Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng",
    price: "3,6 tỷ",
    area: "78,3 m²",
    bedrooms: "3 PN",
    postId: "41461881",
    postDate: "07/11/2024",
    expiryDate: "22/11/2024",
    isHidden: false
  },{
    id: 6781,
    image: "https://file4.batdongsan.com.vn/2024/12/12/20241212113400-7177_wm.jpg",
    status: "failed",
    title: "Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL",
    address: "Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng",
    price: "3,6 tỷ",
    area: "78,3 m²",
    bedrooms: "3 PN",
    postId: "41461881",
    postDate: "07/11/2024",
    expiryDate: "22/11/2024",
    isHidden: false
  },
  {
    id: 1456,
    image: "https://file4.batdongsan.com.vn/2024/12/12/20241212113400-7177_wm.jpg",
    status: "active",
    title: "Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL",
    address: "Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng",
    price: "3,6 tỷ",
    area: "78,3 m²",
    bedrooms: "3 PN",
    postId: "41461881",
    postDate: "07/11/2024",
    expiryDate: "22/11/2024",
    isHidden: false
  },
  {
    id: 234,
    image: "https://file4.batdongsan.com.vn/2024/12/12/20241212113400-7177_wm.jpg",
    status: "active",
    title: "Nhà 2 tầng kiệt Lý Thái Tổ - TTTP Đà Nẵng giá chỉ 3,6 tỷ có TL",
    address: "Đường Lý Thái Tổ, Phường Thạc Gián, Thanh Khê, Đà Nẵng",
    price: "3,6 tỷ",
    area: "78,3 m²",
    bedrooms: "3 PN",
    postId: "41461881",
    postDate: "07/11/2024",
    expiryDate: "22/11/2024",
    isHidden: false
  }
];

const MOCK_USER = {
  userName: "Nguyễn minh thanh thanh",
  userImage: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/469934702_122134093892443481_7639461512469391391_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7VX7sxulf_kQ7kNvgEELAhD&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=A17tsaYm5nXCGKKhwkZSA0_&oh=00_AYAchhOdNGSDFets5W_1Ui2HT4AJJc7MWXQqC-Qz-eZs5Q&oe=6760CEDF",
  balance: "280.000",
  postCount: "44",
  likes: "300",
  rating: "4.9"
};

export const usePostManagement = () => {
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');
  const [userData] = useState(MOCK_USER);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  }, []);

  const handleExtendPost = useCallback((postId) => {
    setPosts(currentPosts => 
      currentPosts.map(post => 
        post.id === postId 
          ? { ...post, expiryDate: "22/12/2024" }
          : post
      )
    );
  }, []);

  const handleEditPost = useCallback((postId) => {
    console.log('Edit post:', postId);
  }, []);

  const handleToggleVisibility = useCallback((postId) => {
    setPosts(currentPosts => 
      currentPosts.map(post => 
        post.id === postId 
          ? { ...post, isHidden: !post.isHidden }
          : post
      )
    );
  }, []);

  return {
    posts,
    currentPage,
    totalPages: 7,
    activeFilter,
    handlePageChange,
    handleFilterChange,
    handleExtendPost,
    handleEditPost,
    handleToggleVisibility,
    userData
  };
};