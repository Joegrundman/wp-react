import React, { useState } from "react";

interface ZoomProps {
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
  onZoomChange?: (zoom: number) => void;
}

const Zoom: React.FC<ZoomProps> = ({
  min = 3,
  max = 9,
  step = 1,
  initial = 5,
  onZoomChange,
}) => {
  const [zoom, setZoom] = useState(initial);

  const handleZoom = (delta: number) => {
    let newZoom = Math.min(
      max,
      Math.max(min, parseFloat((zoom + delta).toFixed(2)))
    );
    setZoom(newZoom);
    if (onZoomChange) onZoomChange(newZoom);
  };

  return (
    <div
      className="absolute bottom-0 right-0 bg-amber-900 border-2 border-slate-200 p-2 rounded-md"
      style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
    >
      <button
        className="cursor-pointer"
        onClick={() => handleZoom(step)}
        disabled={zoom >= max}
        aria-label="Zoom in"
      >
        +
      </button>
      <span style={{ minWidth: 40, textAlign: "center" }}>{zoom}x</span>
      <button
        className="cursor-pointer"
        onClick={() => handleZoom(-step)}
        disabled={zoom <= min}
        aria-label="Zoom out"
      >
        -
      </button>
    </div>
  );
};

export default Zoom;
