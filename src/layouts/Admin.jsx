import React, { useState, useEffect } from 'react';
import Sidebar from "../components/AdminSliderbarr";
import { Dashboard, ViolationReport, NewsManagement, PostManagement } from "../pages/page";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import adminData from './data.json';  // Import data từ file JSON
import styles from './Admin.module.css';

function Admin() {
  const [data, setData] = useState({
    dashboardData: null,
    postData: null,
    newsData: null,
    reportData: null
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load data từ file JSON
    const loadData = () => {
      try {
        setData({
          dashboardData: adminData.dashboard,
          postData: adminData.postManagement,
          newsData: adminData.newsManagement,
          reportData: adminData.violationReport
        });
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
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