import React, { useState, useEffect } from 'react';
import Sidebar from "../components/AdminSliderbarr";
import { Dashboard, ViolationReport, NewsManagement, PostManagement } from "../pages/page";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { adminService } from './apiService';
import styles from './Admin.module.css';

function Admin() {
  const [data, setData] = useState({
    dashboardData: null,
    postData: null,
    newsData: null,
    reportData: null
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [
          dashboardData,
          postManagementData,
          newsData,
          reportsData
        ] = await Promise.all([
          adminService.getDashboardData(),
          adminService.getPostManagementData(),
          adminService.getNewsData(),
          adminService.getViolationReports()
        ]);

        setData({
          dashboardData,
          postData: postManagementData,
          newsData,
          reportData: reportsData
        });
      } catch (err) {
        setError(err.message || 'Có lỗi xảy ra khi tải dữ liệu');
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2>Lỗi</h2>
        <p>{error}</p>
        <button 
          className={styles.retryButton}
          onClick={() => window.location.reload()}
        >
          Thử lại
        </button>
      </div>
    );
  }

  return (
    <Router>
      <div className={styles.container}>
        <Sidebar />
        
        <main className={styles.content}>
          <Routes>
            <Route path="/dashboard" element={
              <Dashboard statsData={data.dashboardData?.statsData} />
            } />
            <Route path="/reports" element={
              <ViolationReport reports={data.reportData?.reports} />
            } />
            <Route path="/newsmanage" element={
              <NewsManagement news={data.newsData?.news} />
            } />
            <Route path="/posts" element={
              <PostManagement 
                users={data.postData?.users}
                posts={data.postData?.posts}
              />
            } />
            <Route path="*" element={
              <Navigate to="/dashboard" replace />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default Admin;