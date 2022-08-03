import React, {
  createRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import "./canvas.css";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { IndividualSticker } from "./individualSticker";
import { useSelector, useDispatch } from "react-redux";
import { deleteStickerOnPanel } from "../../../modules/sticker";
import { deleteImageOnPanel } from "../../../modules/image";
import SampleImg from "../../../assets/sample-img.svg";

export default function Canvas({ type }) {
  // 다이어리 요소들 조회하는 api 요청을 Canvas 내부에서 보내기.

  const dispatch = useDispatch();
  const stickers = useSelector((state) => state.sticker);
  const images = useSelector((state) => state.image);

  const [background] = useImage(SampleImg); // 속지

  const resetAllButtons = useCallback(() => {
    console.log("resetAllButtons");
    stickers.forEach((image) => {
      if (image.resetButtonRef.current) {
        image.resetButtonRef.current();
      }
    });
  }, [stickers]);

  const handleCanvasClick = useCallback(
    (event) => {
      if (event.target.attrs.id === "backgroundImage") {
        resetAllButtons();
      }
    },
    [resetAllButtons]
  );

  /*
  var container = document.querySelector("#stage-parent");
  var width;
  var height;

  if (container) {
    width = container.clientWidth;
    height = container.clientHeight;
    console.log(width, height);
  }
  */
  console.log(stickers);
  return (
    <div style={{ width: "100%", height: "674rem" }}>
      <Stage
        width={945}
        height={674 * 0.9}
        onClick={handleCanvasClick}
        onTap={handleCanvasClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Layer>
          <KonvaImage
            image={background}
            id="backgroundImage"
            width={1380 * 0.8}
            height={674 * 0.9}
          />
          {stickers &&
            stickers.map((sticker, i) => {
              return (
                <IndividualSticker
                  onDelete={() => dispatch(deleteStickerOnPanel(i))}
                  onDragEnd={(event) => {
                    sticker.x = event.target.x();
                    sticker.y = event.target.y();
                  }}
                  key={i}
                  image={sticker}
                  width={100}
                  height={100}
                />
              );
            })}

          {images &&
            images.map((image, i) => {
              return (
                <IndividualSticker
                  onDelete={() => dispatch(deleteImageOnPanel(i))}
                  onDragEnd={(event) => {
                    image.x = event.target.x();
                    image.y = event.target.y();
                  }}
                  key={i}
                  image={image}
                  width={300}
                  height={150}
                />
              );
            })}
        </Layer>
      </Stage>
    </div>
  );
}
