import React from 'react';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setIsSelected, setSeletedItem } from '../store/gallerySlice';

import ItemDetails from './itemDetails';
const Item = ({ item }) => {

  const isSelected = useSelector((state) => state.pictures.isSelected);
  const dispatch = useDispatch();

  const handleItemClick = (item) => {
  
   dispatch(setSeletedItem(item))
  }
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top w-100" src={item.previewURL} alt={item.id} onClick={() => handleItemClick(item)} />
      </div>
    
    
    </>
  );
};

export default Item;
