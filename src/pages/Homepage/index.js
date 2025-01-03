import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./Homepage.module.scss";
import LayoutHeader from "../../layouts/LayoutHeader";
import banner from "../../assets/images/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  InputSearch,
  Button,
  ButtonCollapse,
} from "../../components/component";
const cx = classnames.bind(styles);

const Banner = () => {
  return (
    <div className={cx("wrapper_banner")}>
      <img className={cx("layer_banner")} src={banner} alt="" />
      <div className={cx("content_banner")}>
        <div className={cx("title_banner")}>
          Tìm kiếm bất động sản phù hợp nhu cầu của bạn
        </div>
        <div className={cx("desc_banner")}>
          Có rất nhiều bất động sản được cập nhật hàng ngày trên hệ thống của
          Homepro. Bạn có thể thỏa sức khám phá, lựa chọn bất động sản phù hợp.
        </div>
        <Button
          width="150px"
          height="50px"
          padding="8px 16px"
          borderRadius="5px"
          background="#B2935D"
          color="#fff"
        >
          Tìm hiểu ngay
        </Button>
      </div>
      <div className={cx("wrapper_search")}>
        <div className={cx("option")}>
          <div
            className={cx("option_item")}
            style={{ backgroundColor: "#355C7D" }}
          >
            Nhà đất bán
          </div>
          <div className={cx("option_item")}>Nhà đất cho thuê</div>
        </div>
        <div className={cx("filter_search")}>
          <InputSearch
            width="100%"
            height="60px"
            sizeIcon="25px"
            padding="0 150px 0 50px"
            sizeInput="18px"
            colorIcon="#333"
          >
            <Button
              width="150px"
              height="50px"
              background="#B2935D"
              color="#fff"
              className={cx("btn_search")}
            >
              Tìm kiếm ngay
            </Button>
          </InputSearch>
          <div className={cx("wrapper_filter")}>
            <ButtonCollapse
              width="32%"
              height="40px"
              borderRadius="5px"
              border="1px solid #fff"
              background="transparent"
            >
              Loại nhà đất
              <div className={cx("dropdown")}>
                <div className={cx("dropdown_item")}>Nhà đất</div>
                <div className={cx("dropdown_item")}>Chung cư</div>
                <div className={cx("dropdown_item")}>Căn hộ mini</div>
              </div>
            </ButtonCollapse>
            <ButtonCollapse
              width="32%"
              height="40px"
              borderRadius="5px"
              border="1px solid #fff"
              background="transparent"
            >
              Loại nhà đất
            </ButtonCollapse>
            <ButtonCollapse
              width="32%"
              height="40px"
              borderRadius="5px"
              border="1px solid #fff"
              background="transparent"
            >
              Loại nhà đất
            </ButtonCollapse>
          </div>
        </div>
      </div>
    </div>
  );
};
const News = () => {
  return (
    <div className={cx("wrapper_news")}>
      <div className={cx("title_news")}>Tin tức nổi bật</div>
      <div className={cx("sub_title")}>Tìm kiếm mới nhất</div>
      <div className={cx("content_news")}>
        <div className={cx("main_news")}>
          <div className={cx("img_main_new")}>
            <img
              className={cx("")}
              src="https://i.pinimg.com/736x/c4/44/61/c444610bcf1a47aebf5e92489366b471.jpg"
              alt=""
            />
          </div>
          <div className={cx("conten_main_new")}>
            <div className={cx("main_num")}>01</div>
            <div className={cx("main_text")}>
              Chung Cư Hà Nội Tiếp Tục Nhảy Giá Những Tháng Cuối Năm 2024
            </div>
          </div>
        </div>
        <div className={cx("sub_news")}>
          <div className={cx("sub_news_item")}>
            <img
              className={cx("img_sub_news")}
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
            <div className={cx("sub_num")}>
              02
              <div className={cx("date_post")}>2 ngày trước</div>
            </div>
            <div className={cx("sub_text")}>
              Biến Tường Rào Dự Án Thành Nơi Kể Câu Chuyện Truyền Thông Sáng Tạo
            </div>
          </div>
          <div className={cx("sub_news_item")}>
            <img
              className={cx("img_sub_news")}
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
            <div className={cx("sub_num")}>
              03
              <div className={cx("date_post")}>2 ngày trước</div>
            </div>
            <div className={cx("sub_text")}>
              Biến Tường Rào Dự Án Thành Nơi Kể Câu Chuyện Truyền Thông Sáng Tạo
            </div>
          </div>
          <div className={cx("sub_news_item")}>
            <img
              className={cx("img_sub_news")}
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
            <div className={cx("sub_num")}>
              04
              <div className={cx("date_post")}>2 ngày trước</div>
            </div>
            <div className={cx("sub_text")}>
              Biến Tường Rào Dự Án Thành Nơi Kể Câu Chuyện Truyền Thông Sáng Tạo
            </div>
          </div>
          <div className={cx("btn_more")}>
            <Button
              width="150px"
              height="50px"
              background="#009BA1"
              color="#fff"
            >
              Xem tất cả
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
const ListPost = () => {
  return (
    <div className={cx("wrapper_posts")}>
      <div className={cx("post_sub_title")}>Tìm kiếm nhiều nhất</div>
      <div className={cx("post_main_title")}>Bất động sản dành cho bạn</div>
      <div className={cx("row", "list_post")}>
        <div className={cx("col-3", "list_item")}>
          <div className={cx("img_post_item")}>
            <img
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
          </div>
          <div className={cx("content_post")}>
            <div className={cx("name_post")}>
              Chính chủ nhượng căn góc 3PN 96.87 m2 view hồ dự Khai Sơn
            </div>
            <div className={cx("adress_post")}>
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize="18px"
                color="#848484"
              />
              <div className={cx("adress")}>Thanh Đa, Hà Nội</div>
            </div>
            <div className={cx("date_post")}>Ngày hôm nay</div>
            <div className={cx("line")}></div>
            <div className={cx("info_post")}>
              <div className={cx("price_post")}>
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  fontSize="18px"
                  color="#848484"
                />
                <div className={cx("cost")}>Giá:</div>
                <div className={cx("price")}>4.2 tỷ</div>
                <div className={cx("size_post")}>96 m2</div>
                <div className={cx("heart")}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    fontSize="18px"
                    color="#848484"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-3", "list_item")}>
          <div className={cx("img_post_item")}>
            <img
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
          </div>
          <div className={cx("content_post")}>
            <div className={cx("name_post")}>
              Chính chủ nhượng căn góc 3PN 96.87 m2 view hồ dự Khai Sơn
            </div>
            <div className={cx("adress_post")}>
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize="18px"
                color="#848484"
              />
              <div className={cx("adress")}>Thanh Đa, Hà Nội</div>
            </div>
            <div className={cx("date_post")}>Ngày hôm nay</div>
            <div className={cx("line")}></div>
            <div className={cx("info_post")}>
              <div className={cx("price_post")}>
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  fontSize="18px"
                  color="#848484"
                />
                <div className={cx("cost")}>Giá:</div>
                <div className={cx("price")}>4.2 tỷ</div>
                <div className={cx("size_post")}>96 m2</div>
                <div className={cx("heart")}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    fontSize="18px"
                    color="#848484"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-3", "list_item")}>
          <div className={cx("img_post_item")}>
            <img
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
          </div>
          <div className={cx("content_post")}>
            <div className={cx("name_post")}>
              Chính chủ nhượng căn góc 3PN 96.87 m2 view hồ dự Khai Sơn
            </div>
            <div className={cx("adress_post")}>
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize="18px"
                color="#848484"
              />
              <div className={cx("adress")}>Thanh Đa, Hà Nội</div>
            </div>
            <div className={cx("date_post")}>Ngày hôm nay</div>
            <div className={cx("line")}></div>
            <div className={cx("info_post")}>
              <div className={cx("price_post")}>
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  fontSize="18px"
                  color="#848484"
                />
                <div className={cx("cost")}>Giá:</div>
                <div className={cx("price")}>4.2 tỷ</div>
                <div className={cx("size_post")}>96 m2</div>
                <div className={cx("heart")}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    fontSize="18px"
                    color="#848484"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-3", "list_item")}>
          <div className={cx("img_post_item")}>
            <img
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
          </div>
          <div className={cx("content_post")}>
            <div className={cx("name_post")}>
              Chính chủ nhượng căn góc 3PN 96.87 m2 view hồ dự Khai Sơn
            </div>
            <div className={cx("adress_post")}>
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize="18px"
                color="#848484"
              />
              <div className={cx("adress")}>Thanh Đa, Hà Nội</div>
            </div>
            <div className={cx("date_post")}>Ngày hôm nay</div>
            <div className={cx("line")}></div>
            <div className={cx("info_post")}>
              <div className={cx("price_post")}>
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  fontSize="18px"
                  color="#848484"
                />
                <div className={cx("cost")}>Giá:</div>
                <div className={cx("price")}>4.2 tỷ</div>
                <div className={cx("size_post")}>96 m2</div>
                <div className={cx("heart")}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    fontSize="18px"
                    color="#848484"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-3", "list_item")}>
          <div className={cx("img_post_item")}>
            <img
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
          </div>
          <div className={cx("content_post")}>
            <div className={cx("name_post")}>
              Chính chủ nhượng căn góc 3PN 96.87 m2 view hồ dự Khai Sơn
            </div>
            <div className={cx("adress_post")}>
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize="18px"
                color="#848484"
              />
              <div className={cx("adress")}>Thanh Đa, Hà Nội</div>
            </div>
            <div className={cx("date_post")}>Ngày hôm nay</div>
            <div className={cx("line")}></div>
            <div className={cx("info_post")}>
              <div className={cx("price_post")}>
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  fontSize="18px"
                  color="#848484"
                />
                <div className={cx("cost")}>Giá:</div>
                <div className={cx("price")}>4.2 tỷ</div>
                <div className={cx("size_post")}>96 m2</div>
                <div className={cx("heart")}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    fontSize="18px"
                    color="#848484"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-3", "list_item")}>
          <div className={cx("img_post_item")}>
            <img
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
          </div>
          <div className={cx("content_post")}>
            <div className={cx("name_post")}>
              Chính chủ nhượng căn góc 3PN 96.87 m2 view hồ dự Khai Sơn
            </div>
            <div className={cx("adress_post")}>
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize="18px"
                color="#848484"
              />
              <div className={cx("adress")}>Thanh Đa, Hà Nội</div>
            </div>
            <div className={cx("date_post")}>Ngày hôm nay</div>
            <div className={cx("line")}></div>
            <div className={cx("info_post")}>
              <div className={cx("price_post")}>
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  fontSize="18px"
                  color="#848484"
                />
                <div className={cx("cost")}>Giá:</div>
                <div className={cx("price")}>4.2 tỷ</div>
                <div className={cx("size_post")}>96 m2</div>
                <div className={cx("heart")}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    fontSize="18px"
                    color="#848484"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-3", "list_item")}>
          <div className={cx("img_post_item")}>
            <img
              src="https://i.pinimg.com/736x/51/3a/bd/513abd4be81f7b691d7e9aee4e6a948b.jpg"
              alt=""
            />
          </div>
          <div className={cx("content_post")}>
            <div className={cx("name_post")}>
              Chính chủ nhượng căn góc 3PN 96.87 m2 view hồ dự Khai Sơn
            </div>
            <div className={cx("adress_post")}>
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize="18px"
                color="#848484"
              />
              <div className={cx("adress")}>Thanh Đa, Hà Nội</div>
            </div>
            <div className={cx("date_post")}>Ngày hôm nay</div>
            <div className={cx("line")}></div>
            <div className={cx("info_post")}>
              <div className={cx("price_post")}>
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  fontSize="18px"
                  color="#848484"
                />
                <div className={cx("cost")}>Giá:</div>
                <div className={cx("price")}>4.2 tỷ</div>
                <div className={cx("size_post")}>96 m2</div>
                <div className={cx("heart")}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    fontSize="18px"
                    color="#848484"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ContentHomepage = () => {
  return (
    <>
      <Banner />
      <News />
      <ListPost />
    </>
  );
};

const HomePage = () => {
  return (
    <LayoutHeader>
      <ContentHomepage />
    </LayoutHeader>
  );
};

export default HomePage;
