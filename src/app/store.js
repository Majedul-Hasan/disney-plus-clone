import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice'

import userSlice from '../features/user/userSlice';


export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice



    // counter: counterReducer,
  },
});