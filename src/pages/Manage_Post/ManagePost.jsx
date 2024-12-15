import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from '../../styles/ManagePost.module.css';
import { Sidebar } from '../../components/Sidebar';
import { PostCard } from '../../components/PostCard';
import { Pagination } from '../../components/Pagination';
// import { Breadcrumb } from '../../components/breadcrumb';
import { PostHeader } from '../../components/PostHeader';
import { usePostManagement } from '../../hooks/usePostManagement';


export const ManagePost = () => {
  const {
    posts,
    currentPage,
    totalPages,
    activeFilter,
    handlePageChange,
    handleFilterChange,
    handleExtendPost,
    handleEditPost,
    handleToggleVisibility,
    userData
  } = usePostManagement();

  return (
    <main className={styles.postList}>
      {/* <Breadcrumb /> */}
      
      <div className={styles.mainContent}>
        {/* <Sidebar userData={userData} /> */}
        <Router>
          <Sidebar userData={userData} />
            <Routes>
              <Route path="/manage-posts" component={ManagePost} />
              <Route path="/manage-customers" component={ManagePost} />
              <Route path="/manage-finance" component={ManagePost} />
              <Route path="/manage-account" component={ManagePost} />
            </Routes>
      </Router>       
        <section className={styles.postContent}>
          <PostHeader 
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
          
          {posts.map(post => (
            <PostCard
              key={post.id}
              {...post}
              onExtend={() => handleExtendPost(post.id)}
              onEdit={() => handleEditPost(post.id)}
              onToggleVisibility={() => handleToggleVisibility(post.id)}
            />
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </div>
    </main>
  );
};

export default ManagePost;