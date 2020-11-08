import { createContext, useState } from "react";
import {
  BRUSH_SIZE,
  BRUSH_TYPE,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  ERASER_COLOR,
} from "../Constants";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushType, setBrushType] = useState(BRUSH_TYPE.BRUSH);
  const [brushColor, setBrushColor] = useState(DEFAULT_COLOR);
  const [brushSize, setBrushSize] = useState(DEFAULT_SIZE);
  const [nonHighlighterPath, setNonHighlighterPath] = useState([]);
  const [prevBrushColor, setPrevBrushColor] = useState(DEFAULT_COLOR);
  const [prevBrushSize, setPrevBrushSize] = useState(BRUSH_SIZE.MAX);
  const setBrushTypeWrapper = (type) => {
    if (type === brushType) return;
    switch (type) {
      case BRUSH_TYPE.ERASER:
        setPrevBrushColor(brushColor);
        setBrushColor(ERASER_COLOR);
        setBrushType(BRUSH_TYPE.ERASER);
        if (brushType === BRUSH_TYPE.HIGHLIGHTER) setBrushSize(prevBrushSize);
        break;
      case BRUSH_TYPE.HIGHLIGHTER:
        if (brushType === BRUSH_TYPE.ERASER) setBrushColor(prevBrushColor);
        setPrevBrushSize(brushSize);
        setBrushSize(BRUSH_SIZE.MAX);
        setBrushType(BRUSH_TYPE.HIGHLIGHTER);
        break;
      case BRUSH_TYPE.BRUSH:
        if (brushType === BRUSH_TYPE.ERASER) setBrushColor(prevBrushColor);
        if (brushType === BRUSH_TYPE.HIGHLIGHTER) setBrushSize(prevBrushSize);
        setBrushType(BRUSH_TYPE.BRUSH);
        break;
      default:
      // do nothing
    }
  };

  return (
    <DataContext.Provider
      value={{
        isDrawing,
        setIsDrawing,
        brushType,
        setBrushType: setBrushTypeWrapper,
        brushColor,
        setBrushColor,
        brushSize,
        setBrushSize,
        nonHighlighterPath,
        setNonHighlighterPath,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
