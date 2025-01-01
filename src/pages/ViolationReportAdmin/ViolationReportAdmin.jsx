import React, { useState } from 'react';
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

function ViolationReport({ reports }) {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 7; // Số báo cáo hiển thị mỗi trang

  if (!reports) return null;

  const totalPages = Math.ceil(reports.length / itemsPerPage);

  const currentReports = reports.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={cx('violationReport')}> 
      <main className={cx('container')}>
        <h1 className={cx('title')}>Báo cáo vi phạm</h1>
        <FilterSection />
        <section className={cx('reportList')} aria-label="Danh sách báo cáo vi phạm" role="list">
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
              {currentReports.map((report, index) => (
                <tr key={report.reportId}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
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
        {/* Tích hợp phân trang */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange} // Callback khi trang thay đổi
        />
      </main>
    </div>
  );
}

export default ViolationReport;