import React from 'react';
import Sidebar from "../components/AdminSliderbarr";
import { Dashboard, ViolationReport, NewsManagement } from "../pages/page";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styles from './Admin.module.css';

function Admin() {
  // Function để lấy tiêu đề dựa trên pathname
  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/reports':
        return 'Báo cáo vi phạm';
      case '/newsmanage':
        return 'Quản lý tin tức';
      default:
        return 'Dashboard';
    }
  };

  return (
    <Router>
      <div className={styles.container}>
        <Sidebar />
        
        <main className={styles.content}>
          <div className={styles.content}>
            <Routes>
              <Route path="/dashboard" element={
                <Dashboard />
              } />
              <Route path="/reports" element={
                <ViolationReport />
              } />
              <Route path="/newsmanage" element={
                <NewsManagement />
              } />
              <Route path="*" element={
                <Navigate to="/dashboard" replace />
              } />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default Admin;