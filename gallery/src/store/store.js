import { configureStore, combineReducers } from '@reduxjs/toolkit';

import categoriesReducer from './cagorySlice';
import picturesReducer from './gallerySlice';

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  categories: categoriesReducer,
  pictures: picturesReducer,
});

// Create the Redux store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
