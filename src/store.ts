import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "@/features/canvas/canvasSlice";

export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
