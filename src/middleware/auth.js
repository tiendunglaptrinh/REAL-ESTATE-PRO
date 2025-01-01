import React, { useEffect, useState } from "react";
import { Spinner } from "../components/component";
import { useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const navigate = useNavigate(); // Hook để điều hướng
  const token = localStorage.getItem("authToken");
  if (!token) {
    alert("Bạn cần đăng nhập để truy cập vào trang này!");
    navigate("/");
  } else {
    return children;
  }
};

export default ProtectRoute;
