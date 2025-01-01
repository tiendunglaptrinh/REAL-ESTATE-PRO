import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import axios from "axios";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "../component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faXmark,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import gg from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";
import { Success } from "../component";

const cx = classNames.bind(styles);

function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [isLoggin, setLoggin] = useState(false);
  const [isShowSuccess, setShowSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [infoUser, setInfoUser] = useState("");
  const [error, setError] = useState(null);
  const handleInfoUserChange = (e) => {
    setInfoUser(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const handleClose = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleClickSuccess = async () => {
    setShowSuccess(false);
    setShowLoginForm(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/account/login", {
        info_user: infoUser,
        password: password,
      });
      console.log(">> check response: ", response);
      console.log(">>> check type of ob: ", typeof response.status);
      if (response.status === 200) {
        setLoggin(true);
        setShowSuccess(true);
        localStorage.setItem("authToken", response.data.access_token);
        console.log(
          ">>> check access token: ",
          localStorage.getItem("authToken")
        );
      } else {
        setLoggin(false);
        setError("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!");
      }
    } catch (err) {
      setLoggin(false);
      setError("Đã xảy ra lỗi, vui lòng thử lại!");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setLoggin(true);
    } else {
      setLoggin(false);
    }
  }, []);
  return (
    <div className={cx("wrapper_header")}>
      {isShowSuccess && <Success onClick={handleClickSuccess} />}
      <Link to="/">
        <div className={cx("logo")}>
          <img className={cx("logo_img")} src={logo} alt="Logo Homepro" />
        </div>
      </Link>
      <div className={cx("menu")}>
        <Link to="/">
          <div className={cx("menu_item")}>Nhà đất bán</div>
        </Link>
        <Link to="/">
          <div className={cx("menu_item")}>Nhà đất cho thuê</div>
        </Link>
        <Link to="/">
          <div className={cx("menu_item")}>Tin tức</div>
        </Link>
      </div>

      <div className={cx("wrapper_user")}>
        {isLoggin ? (
          <>
            <img className={cx("avatar")} src={logo} alt="" />
            <Link to="/new-post">
              <Button
                size="small"
                borderRadius="10px"
                background="#B2935D"
                padding="8px 16px"
                color="#fff"
              >
                Đăng tin
              </Button>
            </Link>
          </>
        ) : (
          <div className={cx("auth_buttons")}>
            <Button
              size="small"
              borderRadius="10px"
              background="transparent"
              padding="5px 10px"
              color="#fff"
              onClick={handleLoginClick}
            >
              Đăng nhập
            </Button>
            <div className={cx("line")}></div>
            <Button
              size="small"
              borderRadius="10px"
              background="transparent"
              padding="5px 10px"
              color="#fff"
              onClick={handleRegisterClick}
            >
              Đăng ký
            </Button>
            <Link to="/new-post">
              <Button
                size="small"
                borderRadius="10px"
                background="#B2935D"
                padding="8px 16px"
                color="#fff"
              >
                Đăng tin
              </Button>
            </Link>
          </div>
        )}
      </div>
      {showLoginForm && (
        <div className={cx("wrapper_login")}>
          <form className={cx("login_content")} onSubmit={handleSubmit}>
            <div className={cx("left_content")}>
              <div className={cx("slogan")}>Tìm nhà đất. Tìm chúng tôi</div>
            </div>
            <div className={cx("right_content")}>
              <div className={cx("hello")}>Xin chào bạn</div>
              <div className={cx("login_title")}>Đăng nhập để tiếp tục</div>
              <div className={cx("info_input")}>
                <FontAwesomeIcon className={cx("icon_input")} icon={faUser} />
                <input
                  value={infoUser}
                  onChange={handleInfoUserChange}
                  required
                  type="text"
                  placeholder="Số điện thoại hoặc email"
                />
              </div>
              <div className={cx("info_input")}>
                <FontAwesomeIcon className={cx("icon_input")} icon={faLock} />
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <Button
                className={cx("btn_login")}
                width="100%"
                height="50px"
                borderRadius="4px"
                background="#b2935d"
                color="#fff"
                type="submit"
              >
                Đăng nhập
              </Button>
              {error && <div className={cx("error_login")}>{error}</div>}
              <div className={cx("other_option")}>
                <div className={cx("remember_pass")}>
                  <label>
                    <input
                      className={cx("check_remember")}
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <span className={cx("other_option_text")}>
                      Nhớ mật khẩu
                    </span>
                  </label>
                </div>
                <div className={cx("forgot_password")}>
                  <span className={cx("other_option_text")}>Quên mật khẩu</span>
                </div>
              </div>
              <div class="line_with_text">
                <span style={{ fontSize: "18px" }}>Hoặc</span>
              </div>
              <Button
                className={cx("btn_login_as")}
                width="100%"
                height="50px"
                borderRadius="4px"
                background="#f2f2f2"
                border="1px solid #ccc"
              >
                Đăng nhập với Google
                <img className={cx("login_as_icon")} src={gg} alt="" />
              </Button>
              <Button
                className={cx("btn_login_as")}
                width="100%"
                height="50px"
                borderRadius="4px"
                background="#fff"
                border="1px solid #ccc"
              >
                Đăng nhập với Google
                <img className={cx("login_as_icon")} src={apple} alt="" />
              </Button>
              <div className={cx("redirect_register")}>
                Bạn chưa có tài khoản?{" "}
                <span
                  onClick={handleRegisterClick}
                  className={cx("register_now")}
                >
                  Đăng ký ngay
                </span>
              </div>
            </div>
            <FontAwesomeIcon
              className={cx("close_form")}
              icon={faXmark}
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={handleClose}
            />
          </form>
        </div>
      )}
      {showRegisterForm && (
        <div className={cx("wrapper_login")}>
          <div className={cx("login_content")}>
            <div className={cx("left_content")}>
              <div className={cx("slogan")}>Tìm nhà đất. Tìm chúng tôi</div>
            </div>
            <div className={cx("right_content")}>
              <div className={cx("hello")}>Xin chào bạn</div>
              <div className={cx("login_title")}>Đăng ký tài khoản mới</div>
              <div className={cx("info_input")}>
                <FontAwesomeIcon className={cx("icon_input")} icon={faUser} />
                <input type="text" placeholder="Họ và tên" />
              </div>
              <div className={cx("info_input")}>
                <FontAwesomeIcon className={cx("icon_input")} icon={faLock} />
                <input type="password" placeholder="Ngày tháng năm sinh" />
              </div>
              <div className={cx("info_input")}>
                <FontAwesomeIcon className={cx("icon_input")} icon={faLock} />
                <input type="text" placeholder="Email" />
              </div>
              <div className={cx("info_input")}>
                <FontAwesomeIcon className={cx("icon_input")} icon={faLock} />
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>
              <div className={cx("info_input")}>
                <FontAwesomeIcon className={cx("icon_input")} icon={faLock} />
                <input type="text" placeholder="Số căn cước công dân" />
              </div>
              <div className={cx("info_input")}>
                <FontAwesomeIcon className={cx("icon_input")} icon={faLock} />
                <input type="text" placeholder="Ngày cấp CCCD" />
              </div>
              <div className={cx("info_input")}>
                <FontAwesomeIcon className={cx("icon_input")} icon={faLock} />
                <input type="text" placeholder="Nơi cấp CCCD" />
              </div>
            </div>
            <FontAwesomeIcon
              className={cx("close_form")}
              icon={faXmark}
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={handleClose}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
