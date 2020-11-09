import React, { useRef, useEffect, useContext } from "react";
import { BRUSH_TYPE } from "../Constants";
import { DataContext } from "../Context/DataContext";

export const Board = () => {
  const {
    brushColor,
    brushSize,
    brushType,
    isDrawing,
    setIsDrawing,
    nonHighlighterPath,
    setNonHighlighterPath,
  } = useContext(DataContext);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  let line = {};
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    contextRef.current = context;
  }, []);

  useEffect(() => {
    contextRef.current.strokeStyle = brushColor;
  }, [brushColor]);
  useEffect(() => {
    contextRef.current.lineWidth = brushSize;
  }, [brushSize]);

  const reDraw = () => {
    if (nonHighlighterPath.length === 0) return;
    const prevColor = brushColor;
    const prevBrushSize = brushSize;
    for (let i = 0; i < nonHighlighterPath.length; i++) {
      contextRef.current.beginPath();
      for (let j = 0; j < nonHighlighterPath[i].path.length - 1; j++) {
        contextRef.current.moveTo(
          nonHighlighterPath[i].path[j].offsetX,
          nonHighlighterPath[i].path[j].offsetY
        );
        contextRef.current.lineTo(
          nonHighlighterPath[i].path[j + 1].offsetX,
          nonHighlighterPath[i].path[j + 1].offsetY
        );
      }
      contextRef.current.strokeStyle = nonHighlighterPath[i].brushColor;
      contextRef.current.lineWidth = nonHighlighterPath[i].brushSize;
      contextRef.current.stroke();
      contextRef.current.closePath();
    }
    contextRef.current.strokeStyle = prevColor;
    contextRef.current.lineWidth = prevBrushSize;
  };

  const startDrawing = ({ nativeEvent: { offsetX, offsetY } }) => {
    line = {};
    contextRef.current.clearRect(
      0,
      0,
      window.innerWidth * 2,
      window.innerHeight * 2
    );
    reDraw();
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    line.brushColor = brushColor;
    line.brushSize = brushSize;
    if (
      brushType !== BRUSH_TYPE.HIGHLIGHTER &&
      line.path &&
      line.path.length > 0
    )
      setNonHighlighterPath([...nonHighlighterPath, line]);
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent: { offsetX, offsetY } }) => {
    if (!isDrawing) return;
    line.path = [...(line.path || []), { offsetX, offsetY }];
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  console.log(nonHighlighterPath);
  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
};
