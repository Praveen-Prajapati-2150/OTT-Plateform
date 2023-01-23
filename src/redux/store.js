import { configureStore } from '@reduxjs/toolkit';

import userReducer from './featuers/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
