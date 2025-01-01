import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-backend-url/api', // Thay đổi URL backend
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const adminService = {
  // Lấy data cho dashboard
  getDashboardData: async () => {
    try {
      const response = await api.get('/dashboard/stats');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch dashboard data');
    }
  },

  // Lấy data quản lý post
  getPostManagementData: async () => {
    try {
      const [usersResponse, postsResponse] = await Promise.all([
        api.get('/users'),
        api.get('/posts')
      ]);
      return {
        users: usersResponse.data,
        posts: postsResponse.data
      };
    } catch (error) {
      throw new Error('Failed to fetch post management data');
    }
  },

  // Lấy data tin tức
  getNewsData: async () => {
    try {
      const response = await api.get('/news');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch news data');
    }
  },

  // Lấy data báo cáo vi phạm
  getViolationReports: async () => {
    try {
      const response = await api.get('/violation-reports');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch violation reports');
    }
  }
};