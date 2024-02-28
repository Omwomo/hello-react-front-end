import { createSlice } from '@reduxjs/toolkit';
import fetchRandomGreeting from '../thunks/greetingThunk';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    value: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectGreeting = (state) => state.greeting.value;
export const selectGreetingStatus = (state) => state.greeting.status;
export const selectGreetingError = (state) => state.greeting.error;

export default greetingSlice.reducer;
