import { createSlice } from "@reduxjs/toolkit";
import { aiQuery } from "../services/cohere";

const initialState = {
  chats: [],
};

export const chatSlice: any = createSlice({
  name: "chat",
  initialState,
  reducers: {
    newQuery: (state: any, query: any) => {
      state.chats = [
        ...state.chats, {
        user: query.payload,
        bot: "Y yo qué sé"
      }]
    }
  }
});

export const { newQuery } = chatSlice.actions;

export default chatSlice.reducer;