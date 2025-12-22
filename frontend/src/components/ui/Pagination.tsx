"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

interface PaginationProps {
  totalPages: number;
}

function Pagination({ totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = parseInt(searchParams.get('page') || '1');

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  }

  // Tính toán các trang cần hiển thị: trang đầu, trang cuối, trang hiện tại ±5
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const startPage = Math.max(2, current - 5); // Bắt đầu từ current - 5 (tối thiểu là 2)
    const endPage = Math.min(totalPages - 1, current + 5); // Kết thúc ở current + 5 (tối đa là totalPages - 1)

    // Luôn thêm trang 1
    pages.push(1);

    // Thêm dấu ... nếu có khoảng cách giữa trang 1 và startPage
    if (startPage > 2) {
      pages.push('...');
    }

    // Thêm các trang từ startPage đến endPage
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Thêm dấu ... nếu có khoảng cách giữa endPage và trang cuối
    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    // Luôn thêm trang cuối (nếu totalPages > 1)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }

  const pageNumbers = getPageNumbers();

  return (
    <nav className="custome-pagination">
      <ul className="pagination justify-content-center">

        <li className="page-item"
          onClick={() => handlePageChange(1)}
        >
          <a className="first page-link">
            <i className="fa-solid fa-angles-left"></i>
          </a>
        </li>
        {
          current !== 1 && (
            <li className="page-item"
              onClick={() => handlePageChange(current - 1)}
            >
              <a className="prev page-link">
                <i className="fas fa-angle-left"></i>
              </a>
            </li>
          )
        }
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <li key={`ellipsis-${index}`} className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )
          }
          return (
            <li
              key={page}
              className={`page-item ${page === current ? 'active' : ''}`}
              onClick={() => handlePageChange(page as number)}
            >
              <a className="page-link">{page}</a>
            </li>
          )
        })}




        {current !== totalPages && (<li className="page-item"
          onClick={() => handlePageChange(current + 1)}
        >
          <a className="next page-link">
            <i className="fas fa-angle-right"></i>
          </a>
        </li>)}

        <li className="page-item"
          onClick={() => handlePageChange(totalPages)}
        >
          <a className="first page-link">
            <i className="fa-solid fa-angles-right"></i>
          </a>
        </li>

      </ul>
    </nav>

  )
}

export default Pagination