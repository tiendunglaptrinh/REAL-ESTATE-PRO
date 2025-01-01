import React from 'react';
import Sidebar from "../components/AdminSliderbarr";
import { Dashboard, ViolationReport, NewsManagement, PostManagement } from "../pages/page";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styles from './Admin.module.css';

function Admin() {
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
              <Route path="/posts" element={
                <PostManagement />
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