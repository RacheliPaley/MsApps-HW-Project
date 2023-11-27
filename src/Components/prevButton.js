import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../store/gallerySlice';

const PrevButton = () => {
  // Retrieve current page from Redux store
  const currentPage = useSelector((state) => state.pictures.currentPage);
  const dispatch = useDispatch();

  // Handle click event for previous button
  const handlePrevClick = () => {
    // Dispatch action to update current page
    dispatch(setCurrentPage(currentPage - 1));
  };

  return (
    // Render previous button with click event and disabled state
    <button className="btn btn-outline-dark" onClick={handlePrevClick} disabled={currentPage === 1}>
      Previous
    </button>
  );
};

export default PrevButton;
