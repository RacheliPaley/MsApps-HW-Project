import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state for gallerySlice 
const initialState = {
  data: [],
  currentPage: 1,
  status: 'idle',
  error: null,
  category: "",
  hasMoreData: true,
  selectedItem:null,

};

// Create a slice for managing pictures state
const pictureSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      // Set the current page
      state.currentPage = action.payload;
    },
    setCategory: (state, action) => {
      // Reset the current page and set the category
      state.currentPage = 1;
      state.category = action.payload;
    } ,
    setSeletedItem:(state, action) => {
      // Reset the current page and set the category
    state.selectedItem = action.payload;
    } ,
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        // Set status to loading when fetching data
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        // Set status to succeeded and update data, error, and hasMoreData
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
        state.hasMoreData = action.payload.length > 0;
      })
      .addCase(fetchData.rejected, (state, action) => {
        // Set status to failed and update error
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Asynchronous thunk for fetching data
export const fetchData = createAsyncThunk('pictures/fetchData', async (_, { getState }) => {
  try {
    const currentPage = getState().pictures.currentPage;
    const category = getState().pictures.category;

    // Fetch data from API based on current page and category
    const response = await fetch(`http://localhost:3017/data?page=${currentPage}&category=${category}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
});

// Export actions and reducer from the slice
export const { setCurrentPage, setCategory ,setSeletedItem } = pictureSlice.actions;
export default pictureSlice.reducer;
