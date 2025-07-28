import React, { useRef, useEffect } from "react";
import type { GameState } from "~/pages/Game";

// showProgress("Drawing map...");

// 	var map = this;
// 	if (!map) return;
// 	if (map.zoomLevel > 9 || map.zoomLevel == 1) {
// 		map.zoomLevel = 0.4;
// 		game.zoomLevel = 0.4;
// 	}

// 	var promise = new Promise(function (resolve, reject) {
// 		var size = Math.round((map.zoomLevel * 100) / 10);
// 		var theater =
// 			map.theater.charAt(0).toUpperCase() + map.theater.substring(1);
// 		var url = "content/Maps/WP" + theater + size + "a";
// 		if (game.isWorldCrisis()) url += '-wc';
// 		else if (game.originalStartingYear && game.originalStartingYear < 1939)
// 			url += '-early';
// 		url += ".jpg?refreshd" + version;

// 		mapImage = new Image();
// 		mapImage.onload = function () {
// 			map.resizeObjects();

// 			$("#mapBackgroundDiv").css("background-image", "url(" + url + ")");

// 			map.drawHexes();
// 			mapNav.refresh();

// 			fadeMapIn();
// 			try {
// 				if (callback) callback();
// 				else WP.Settings.scrollToLastPlace(map.id);
// 			} catch (error) {
// 				WP.Settings.scrollToLastPlace(map.id);
// 			}
// 		};
// 		mapImage.src = url;
// 	});

type MapCanvasProps = {
  width?: number;
  height?: number;
  draw?: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
  style?: React.CSSProperties;
  gameState: GameState;
};

const MapCanvas: React.FC<MapCanvasProps> = ({
  width = 800,
  height = 600,
  draw,
  style,
  gameState,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const url = `../app/assets/maps/${gameState.theater}${gameState.zoomLevel}.jpg`;

  console.log(imageRef.current?.height, imageRef.current?.width);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    if (draw) {
      draw(ctx, width, height);
    }
  }, [draw, width, height]);

  return (
    <div ref={canvasContainerRef} style={{ position: "relative" }}>
      <img ref={imageRef} loading="lazy" src={url}></img>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ display: "block", ...style }}
      />
    </div>
  );
};

export default MapCanvas;
