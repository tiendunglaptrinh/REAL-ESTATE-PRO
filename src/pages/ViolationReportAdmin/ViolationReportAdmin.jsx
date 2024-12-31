import React from 'react';
import classnames from 'classnames/bind';
import ReportItem from '../../components/ReportItemsAdmin';
import FilterSection from '../../components/FillterSelection';
import Sidebar from '../../components/AdminSliderbarr';
import baseStyles from './ViolationReportAdmin.module.css';
import Pagination from '../../components/Pagination';

const cx = classnames.bind(baseStyles);
const handleDetailClick = (reportId) => {
    console.log('Xem chi tiết cho báo cáo:', reportId);
    // Thực hiện các hành động khác, như điều hướng hoặc mở modal
};

const reportData = [
  {
    number: '169',
    reportId: '13244',
    postId: '1542152354',
    title: 'Bán căn nhà mẫu 54m2 tổng diện tích sử dụng 200m2, thiết kế 3PN đẹp, có thang máy và nội thất',
    reason: 'Tin sai nội dung, Tin có dấu hiệu lừa đảo',
    date: '12/12/2024'
  },
  {
    number: '168',
    reportId: '13243', 
    postId: '4089902321',
    title: 'Cho thuê căn hộ Akari Phase 1 & 2 - căn 2PN - 3PN giá từ 8tr - 13tr, căn hộ đa dạng, dễ lựa chọn',
    reason: 'Tin đã giao dịch xong',
    date: '12/12/2024'
  },
  {
    number: '167',
    reportId: '13242',
    postId: '3615503812', 
    title: 'Cập nhật giỏ hàng cho thuê căn hộ mới nhất tại Vinhomes Golden River',
    reason: 'Tin có dấu hiệu lừa đảo',
    date: '12/12/2024'
  },
  {
    number: '166',
    reportId: '13241',
    postId: '1213132345',
    title: 'Cho thuê BT 4PN, 4WC, 264m2, 30 triệu, Lê Văn Sỹ, P13, Phú Nhuận, HCM - Hot!',
    reason: 'Lý do khác',
    date: '12/12/2024'
  },
  {
    number: '165',
    reportId: '13240',
    postId: '1454646421',
    title: 'Biệt thự Dương Nội quỹ căn vip giá f0: Đường lớn-căn góc-view chung cư ck tới 13% từ cđt Nam Cường',
    reason: 'Trùng tin đăng với tin khác',
    date: '12/12/2024'
  },
  {
    number: '164',
    reportId: '13239',
    postId: '1542152354',
    title: 'Chính chủ em bán tòa nhà Mặt Phố Nguyễn Khuyễn, Văn Quán, Hà Đông, 75m2, 9 tầng, Giá 24.8 tỷ',
    reason: 'Tin sai nội dung',
    date: '11/12/2024'
  },
  {
    number: '163',
    reportId: '13238',
    postId: '1542499912',
    title: 'The Opera (1PN - 9,3 tỷ)(2PN - 12 tỷ)(3PN - 22 tỷ)(4PN - 30 tỷ) loft, duplex giá rẻ nhất thị trường',
    reason: 'Trùng tin đăng với tin khác',
    date: '11/12/2024'
  },
  {
    number: '162',
    reportId: '13237',
    postId: '1111111111',
    title: 'Hot! Mở Bán Quỹ CH Độc Quyền Dự Án Eurowindow Sát VH Cổ Loa, CH 2PN Full Nt giá 3,5 tỷ Ở + Đầu Tư',
    reason: 'Tin sai nội dung, Tin có dấu hiệu lừa đảo',
    date: '11/12/2024'
  },
  {
    number: '161',
    reportId: '13236',
    postId: '4444456123',
    title: 'Nắm giỏ hàng độc quyền hơn 99 căn The Opera Metropole Thủ Thiêm đẹp nhất, giá tốt nhất thị trường',
    reason: 'Lý do khác',
    date: '11/12/2024'
  },
  {
    number: '160',
    reportId: '13235',
    postId: '1753148212',
    title: 'Ra mắt quỹ căn Shophouse góc vip nhất Himlam Thường Tín - Không alo ngay là lỡ, là tiếc',
    reason: 'Tin sai nội dung, Tin có dấu hiệu lừa đảo',
    date: '11/12/2024'
  }
];

function ViolationReport() {
  return (
    <div className={cx('violationReport')}> 
        {/* <Sidebar /> */}
        <main className={cx('container')}>
            <h1 className={cx('title')}>Báo cáo vi phạm</h1>
       

        <FilterSection />

        <section
            className={cx('reportList')}
            aria-label="Danh sách báo cáo vi phạm"
            role="list"
        >
            <table className={cx('reportTable')}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã báo cáo</th>
                        <th>Mã tin đăng</th>
                        <th>Tiêu đề tin</th>
                        <th>Lý do</th>
                        <th>Ngày nhận</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((report, index) => (
                        <tr key={report.reportId}>
                            <td>{index + 1}</td>
                            <td>{report.reportId}</td>
                            <td>{report.postId}</td>
                            <td>{report.title}</td>
                            <td>{report.reason}</td>
                            <td>{report.date}</td>
                            <td>
                                <button
                                    className={cx('detailButton')}
                                    onClick={() => handleDetailClick(report.reportId)}
                                >
                                    Chi tiết
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        <Pagination currentPage={1} totalPages={7} />
        </main>
    </div>
  );
}

export default ViolationReport;