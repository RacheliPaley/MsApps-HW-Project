import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchDataCategory, selectCategories } from '../store/cagorySlice';
import {  fetchData ,setCategory} from '../store/gallerySlice'

const SelectCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const category = useSelector((state) => state.pictures.category);
  const [selectedCategory, setSelectedCategory] = useState('');
 

  useEffect(() => {
    // Fetch categories when component mounts
    dispatch(fetchDataCategory());
  }, [dispatch]);

  function handleCategoryChange(e) {
    // Update selected category and fetch data based on category
    setSelectedCategory(e);
    dispatch(setCategory(e));
    dispatch(fetchData(category));
  }

  return (
    <div>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        style={{ border: '1px solid black' }}
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
