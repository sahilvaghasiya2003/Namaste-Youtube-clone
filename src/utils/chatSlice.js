import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./Constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
messages:[]  },
  reducers: {
    addMessage: (state, actions) => {
      state.messages.splice(OFFSET_LIVE_CHAT,1);
      state.messages.unshift(actions.payload);
    },

  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
