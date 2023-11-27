import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../store/gallerySlice';
import NextButton from './nextButton';
import PrevButton from './prevButton';

const Pagination = ({ currentPage, pages }) => {
  const dispatch = useDispatch();
  // Function to handle page click event
  const handlePageClick = (page) => {
    // Dispatch action to update current page
    dispatch(setCurrentPage(page));
  };

  // Function to render the page numbers
  const renderPageNumbers = () => {
    return Array.from({ length: pages }, (_, index) => {
      const pageNumber = index + 1;
      const isActive = pageNumber === currentPage;

      return (
        <li
          key={pageNumber}
          className={`page-item ${isActive ? 'active' : ''}`}
        >
          <a className="btn btn-outline-dark" href="#" onClick={() => { handlePageClick(pageNumber) }}>
            {pageNumber}
          </a>
        </li>
      );
    });
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <PrevButton />
        </li>
        {renderPageNumbers()}
        <li className="page-item">
          <NextButton />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
