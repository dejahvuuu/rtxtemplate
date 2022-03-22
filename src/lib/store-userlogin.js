import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../views/User/UserSlice';
export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
