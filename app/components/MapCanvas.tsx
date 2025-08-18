import React, { useRef, useState } from "react";
import type { GameState } from "~/pages/Game";

const getMapUrl = (gameState: GameState) =>
  `../app/assets/maps/${gameState.theater}${gameState.zoomLevel}.jpg`;

type MapCanvasProps = {
  draw?: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
  style?: React.CSSProperties;
  gameState: GameState;
};

const MapCanvas: React.FC<MapCanvasProps> = ({ draw, style, gameState }) => {
  const [mapSize, setMapSize] = useState<{ height: number; width: number }>({
    width: 1,
    height: 1,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const url = getMapUrl(gameState);

  // const height = imageRef.current?.width ?? 0;

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const ctx = canvas.getContext("2d");
  //   if (!ctx) return;
  //   ctx.clearRect(0, 0, width, height);
  //   if (draw) {
  //     draw(ctx, width, height);
  //   }
  // }, [draw, width, height]);
  if (typeof Image === "undefined") return <div>Loading image</div>;

  const mapImage = new Image();
  mapImage.onload = function () {
    canvasContainerRef.current?.style.setProperty(
      "background-image",
      `url(${url})`
    );
    if (
      mapImage.naturalWidth !== mapSize.width ||
      mapImage.naturalHeight !== mapSize.height
    ) {
      setMapSize({
        height: mapImage.naturalHeight,
        width: mapImage.naturalWidth,
      });
    }
    // map.resizeObjects();

    // $("#mapBackgroundDiv").css("background-image", "url(" + url + ")");

    // map.drawHexes();
    // mapNav.refresh();

    // fadeMapIn();
    // try {
    // 	if (callback) callback();
    // 	else WP.Settings.scrollToLastPlace(map.id);
    // } catch (error) {
    // 	WP.Settings.scrollToLastPlace(map.id);
    // }
  };
  mapImage.src = url;

  return (
    <div
      ref={canvasContainerRef}
      style={{
        position: "relative",
        width: mapSize.width,
        height: mapSize.height,
      }}
    >
      <canvas
        ref={canvasRef}
        width={mapSize.width}
        height={mapSize.height}
        style={{ display: "block", ...style }}
      />
    </div>
  );
};

export default MapCanvas;
