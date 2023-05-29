import { createSlice } from "@reduxjs/toolkit";
import { EVENTS_TAB } from "../../../utils/constants/account";

const initialState = {
  activeTab: EVENTS_TAB,
  activeEventTab: null,
};

const accountOption = createSlice({
  name: "accountOption",
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setActiveEventTab(state, action) {
      state.activeEventTab = action.payload;
    },
  },
});

export const { setActiveTab, setActiveEventTab } = accountOption.actions;
export default accountOption.reducer;
