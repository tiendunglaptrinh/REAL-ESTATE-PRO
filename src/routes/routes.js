import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, Post, NewPost } from "../pages/page.js";
import ProtectRoute from "../middleware/auth.js";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/posts", element: <Post /> },
  {
    path: "/new-post",
    element: (
      <ProtectRoute>
        <NewPost />
      </ProtectRoute>
    ),
  },
]);
