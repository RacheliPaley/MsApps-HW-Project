import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from '../store/gallerySlice';

import SelectCategory from './selectCategory';
import ShowData from './item';
import Pagination from './pagination';
import ItemDetails from './itemDetails';

const Gallery = () => {
  // Retrieve data from Redux store
  const data = useSelector((state) => state.pictures.data);
  const currentPage = useSelector((state) => state.pictures.currentPage);
  const status = useSelector((state) => state.pictures.status);
  const error = useSelector((state) => state.pictures.error);
  const selectedItem = useSelector((state) => state.pictures.selectedItem);

  const ArrayLength = data.ArrayLength;
  const pages = parseInt((ArrayLength / 9) + 1)
  const dispatch = useDispatch();

  // Fetch data when component mounts or currentPage changes
  useEffect(() => {
    dispatch(fetchData(currentPage));

  }, [dispatch, currentPage]);

  // Render loading state if data is still loading

  if (status === 'loading') {

    return <div className="container">
      <div className="spinner-container">
        <div className="spinner-border spinner" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  }

  // Render error message if data fetch failed
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div id='container'>
      <div id="tool-bar" >
        <Pagination currentPage={currentPage} pages={pages} />
        <SelectCategory />
      </div>
      <div id='gallery'>

        {data.result && data.result.map((item) => (
          <div className="column is-4" key={item.id}>
            <ShowData item={item} />
          </div>
        ))}
      </div>
      {selectedItem &&
        <ItemDetails item={selectedItem} />
      }
    </div>

  );

};

export default Gallery;
