import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state for categories slice
const initialState = {
  categories: [],
  status: 'idle',
  error: null,
};

// Async thunk action creator to fetch data
export const fetchDataCategory = createAsyncThunk(
  'categories/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      // Fetch data from API
      const response = await fetch('http://localhost:3017/categories');
      const data = await response.json();
      
      return { response: data };
    } catch (error) {
      // Return error message if data fetching fails
      return rejectWithValue('Failed to fetch data');
    }
  }
);

// Categories slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state when fetching data
      .addCase(fetchDataCategory.pending, (state) => {
        state.status = 'loading';
      })
      // Handle fulfilled state when data fetch is successful
      .addCase(fetchDataCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload.response;
      })
      // Handle rejected state when data fetch fails
      .addCase(fetchDataCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Select categories from state
export const selectCategories = (state) => state.categories.categories;

// Export reducer
export default categoriesSlice.reducer;
