import useImage from "use-image";
import React, { useState, useEffect, useRef } from "react";
import { Image as KonvaImage, Group, Transformer } from "react-konva";
import { useHoverDirty, useLongPress } from "react-use";

export const IndividualSticker = ({
  image,
  onDelete,
  onDragEnd,
  isSelected,
  onSelect,
  onChange,
}) => {
  const imageRef = useRef(null);
  const isHovered = useHoverDirty(imageRef);
  const [stickerImage] = useImage(image.url);
  const [onMouseOver, setOnMouseOver] = useState(false);
  const trRef = React.useRef(); //Transformer

  React.useEffect(() => {
    if (isSelected) {
      //transformer 직접 붙히기
      trRef.current.nodes([imageRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const stickerWidth = image.width;
  const stickerHeight = stickerImage
    ? (image.width * stickerImage.height) / stickerImage.width
    : 0;
  
  /*
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Backspace" && onMouseOver) {
        console.log("Backspace");
        onDelete(); // 왜 스티커 하나만 삭제되지 않고 여러개가 삭제될까
      }
    });
  });
  */

  return (
    <>
      <KonvaImage
        onWheel={onDelete}
        onClick={onSelect}
        onTap={onSelect}
        ref={imageRef}
        width={image.width}
        height={image.height}
        image={stickerImage}
        draggable
        x={image.x}
        y={image.y}
        rotation={image.rotation}
        onDragEnd={(e) => {
          onDragEnd(e); // 드래그 끝난 지점의 스티커 좌표 저장
        }}
        onMouseOver={() => {
          setOnMouseOver(true);
          //console.log(image.id, "스티커가 onMouseOver");
        }}
        onMouseLeave={() => {
          setOnMouseOver(false);
          //console.log(image.id, "스티커가 onMouseLeave");
        }}
        onTransformEnd={(e) => {
          console.log(e);
          const node = imageRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          //리셋
          node.scaleX(1);
          node.scaleY(1);

          //변경
          onChange({
            ...image,
            x: node.x(),
            y: node.y(),
            rotation: e.target.attrs.rotation,

            // 최소값 지정
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // 리사이즈 제한
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};