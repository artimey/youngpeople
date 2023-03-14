import { createSlice } from "@reduxjs/toolkit";

// avatar: null,
// initials: null,
// email: null,
// birthday: null,
// typeOfActivity: null,
// institution: null,
// phoneNumber: null,
// nickName: null,
// login: null,
// group: null,
// apiKey: null,

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
