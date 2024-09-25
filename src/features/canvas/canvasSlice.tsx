import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CanvasState {
  strokeColor: string;
  strokeWidth: number;
  canvasWidth: number;
  canvasHeight: number;
  isCanvasCleared: boolean;
  selectedTool: "none" | "pencil" | "eraser";
}

const initialState: CanvasState = {
  strokeWidth: 10,
  canvasWidth: 1920,
  canvasHeight: 1080,
  strokeColor: "#000",
  selectedTool: "none",
  isCanvasCleared: false,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setSelectedTool: (
      state,
      action: PayloadAction<"none" | "pencil" | "eraser">
    ) => {
      state.selectedTool = action.payload;
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.strokeColor = action.payload;
    },
    setStrokeWidth: (state, action: PayloadAction<number>) => {
      state.strokeWidth = action.payload;
    },
    clearCanvas: (state) => {
      state.isCanvasCleared = !state.isCanvasCleared;
    },
    setCanvasSize: (
      state,
      action: PayloadAction<{ width: number; height: number }>
    ) => {
      state.canvasWidth = action.payload.width;
      state.canvasHeight = action.payload.height;
    },
  },
});

export const {
  setSelectedTool,
  setStrokeColor,
  setStrokeWidth,
  clearCanvas,
  setCanvasSize,
} = canvasSlice.actions;

export default canvasSlice.reducer;
