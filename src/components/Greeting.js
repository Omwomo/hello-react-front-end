import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRandomGreeting from '../thunks/greetingThunk';
import {
  selectGreeting,
  selectGreetingStatus,
  selectGreetingError,
} from '../slices/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);
  const status = useSelector(selectGreetingStatus);
  const error = useSelector(selectGreetingError);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
