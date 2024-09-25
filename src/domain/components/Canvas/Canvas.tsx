import "./Canvas.scss";
import { pfConfig } from "./config";
import { getStroke } from "perfect-freehand";
import { RootState, AppDispatch } from "@/store";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCanvasSize } from "@/features/canvas/canvasSlice";

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

interface Point {
  x: number;
  y: number;
  pressure?: number;
}

enum PointBufferSize { // For Pen/Table pressure
  Failing = 1,
  Dry = 10,
  Standard = 25,
  Natural = 50,
  Inky = 75,
}

const POINT_BUFFER_SIZE = PointBufferSize.Standard;

function Canvas() {
  const dispatch = useDispatch<AppDispatch>();
  const [_, setPoints] = useState<Point[]>([]);
  const canvasReference = useRef<HTMLCanvasElement | null>(null);
  const { strokeColor, strokeWidth, canvasWidth, canvasHeight } = useSelector(
    (state: RootState) => state.canvas
  );

  useEffect(() => {
    const canvas = canvasReference.current;
    if (canvas) {
      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (context) {
        const newWidth = Math.min(canvasWidth, CANVAS_WIDTH);
        const newHeight = Math.min(canvasHeight, CANVAS_HEIGHT);
        canvas.width = newWidth;
        canvas.height = newHeight;
        dispatch(setCanvasSize({ width: newWidth, height: newHeight }));

        const resizeObserver = new ResizeObserver(() => {
          const { width, height } = canvas.getBoundingClientRect();
          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );

          const newWidth = Math.min(width, CANVAS_WIDTH);
          const newHeight = Math.min(height, CANVAS_HEIGHT);
          canvas.width = newWidth;
          canvas.height = newHeight;

          context.putImageData(imageData, 0, 0);
          dispatch(setCanvasSize({ width: newWidth, height: newHeight }));
        });

        resizeObserver.observe(canvas);

        return () => resizeObserver.disconnect();
      }
    }
  }, [dispatch, canvasWidth, canvasHeight]);

  useEffect(() => {
    const canvas = canvasReference.current;
    const context = canvas?.getContext("2d", { willReadFrequently: true });

    if (canvas && context) {
      const drawStroke = (points: Point[], startIndex: number) => {
        const stroke = getStroke(
          points.slice(startIndex).map((p) => [p.x, p.y, p.pressure || 0.5]),
          pfConfig
        );

        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = strokeColor;

        // Draw/redraw only the most recent points
        context.beginPath();
        stroke.forEach(([x, y]) => {
          context.lineTo(x, y);
        });
        context.stroke();
      };

      const handleStart = (e: MouseEvent | TouchEvent) => {
        e.preventDefault();
        const { x, y, pressure } = getPositionAndPressure(e);
        setPoints([{ x, y, pressure }]);
      };

      const handleMove = (e: MouseEvent | TouchEvent) => {
        if ("buttons" in e && e.buttons !== 1) return; // Only left mouse button
        e.preventDefault();
        const { x, y, pressure } = getPositionAndPressure(e);
        setPoints((prevPoints) => {
          const newPoints = [...prevPoints, { x, y, pressure }];
          const startIndex = Math.max(0, newPoints.length - POINT_BUFFER_SIZE); // Only keep the last few points
          context.lineWidth = strokeWidth * pressure;
          drawStroke(newPoints, startIndex); // Draw from the start of the buffer

          // Discard older points beyond the buffer size
          return [...newPoints.slice(-POINT_BUFFER_SIZE)];
        });
      };

      const handleEnd = () => {
        // Cleans all point's history
        setPoints([]);
      };

      const getPositionAndPressure = (
        e: MouseEvent | TouchEvent
      ): { x: number; y: number; pressure: number } => {
        const canvas = canvasReference.current;
        if (!canvas) return { x: 0, y: 0, pressure: 0.5 };

        const rect = canvas.getBoundingClientRect();
        const clientX =
          e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
        const clientY =
          e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
        const pressure =
          e instanceof TouchEvent ? e.touches[0].force || 0.5 : 0.5;

        return {
          x: clientX - rect.left,
          y: clientY - rect.top,
          pressure,
        };
      };

      const options = { passive: false };

      document.addEventListener("mousedown", handleStart, options);
      document.addEventListener("mousemove", handleMove, options);
      document.addEventListener("mouseup", handleEnd, options);
      document.addEventListener("touchstart", handleStart, options);
      document.addEventListener("touchmove", handleMove, options);
      document.addEventListener("touchend", handleEnd, options);

      return () => {
        document.removeEventListener("mousedown", handleStart);
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleEnd);
        document.removeEventListener("touchstart", handleStart);
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("touchend", handleEnd);
      };
    }
  }, [strokeColor, strokeWidth]);

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasReference}
        className="canvas"
        style={{
          maxWidth: `${CANVAS_WIDTH}px`,
          maxHeight: `${CANVAS_HEIGHT}px`,
        }}
      />
    </div>
  );
}

export default Canvas;
