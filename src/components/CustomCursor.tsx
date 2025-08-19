import React from "react";

interface CursorProps {
  cursorHover: boolean;
  cursorPos: { x: number; y: number };
}

const Cursor = ({ cursorHover, cursorPos }: CursorProps) => {
  return (
    <div
      className={`cursor ${cursorHover ? "hover" : ""}`}
      style={{ left: cursorPos.x - 10, top: cursorPos.y - 10 }}
    />
  );
};

export default Cursor;
