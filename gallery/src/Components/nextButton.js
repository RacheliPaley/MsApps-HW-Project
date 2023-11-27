import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../store/gallerySlice';

const NextButton = () => {
  // Retrieve current page and hasMoreData flag from Redux store
  const data = useSelector((state) => state.pictures.data);

  const currentPage = useSelector((state) => state.pictures.currentPage);

  const dispatch = useDispatch();

  // Handle click event for next button
  const handleNextClick = () => {
    // Dispatch action to update current page
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <button className="btn btn-outline-dark" onClick={handleNextClick} disabled={parseInt(data.ArrayLength) / 9 <= currentPage}>
      Next
    </button>
  );
};

export default NextButton;
