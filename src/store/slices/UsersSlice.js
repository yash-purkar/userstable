import { createSlice } from '@reduxjs/toolkit';
import { deleteAllUsers } from '../actions';

const UsersSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload.user)
    },
    removeUser(state, action) {
      state.splice(action.payload.index, 1);
    }
  }
  ,
  extraReducers(builder) {
    builder.addCase(deleteAllUsers, () => {
      return []
    })
  }
});

export default UsersSlice.reducer;
export const { addUser, removeUser } = UsersSlice.actions;