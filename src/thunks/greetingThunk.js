import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    try {
      const response = await fetch(process.env.REACT_APP_RAILS_URL || 'http://127.0.0.1:3000/v1/random_greeting', {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.greeting;
    } catch (error) {
      throw error('Error:', error);
    }
  },
);

export default fetchRandomGreeting;
