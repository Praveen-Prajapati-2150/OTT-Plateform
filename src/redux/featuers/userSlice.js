import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {},
});

// export const { login, logout } = userSlice.actions;

// export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
