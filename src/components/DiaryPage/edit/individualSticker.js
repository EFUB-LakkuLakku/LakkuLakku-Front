import useImage from "use-image";
import React, { useState, useEffect, useRef } from "react";
import { Image as KonvaImage, Group } from "react-konva";
import { useHoverDirty, useLongPress } from "react-use";

export const IndividualSticker = ({
  image,
  onDelete,
  onDragEnd,
  width,
  height,
}) => {
  const imageRef = useRef(null);
  const isHovered = useHoverDirty(imageRef);
  const [stickerImage] = useImage(image.url);
  const [deleteImage] = useImage(require("../../../assets/cancel.svg"));
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [onMouseOver, setOnMouseOver] = useState(false);

  const onLongPress = () => {
    setShowDeleteButton(true);
  };

  /*
  image.backRef.current = () => {
    setShowDeleteButton(false);
  };
  */
  const longPressEvent = useLongPress(onLongPress, { delay: 200 });
  const [isDragging, setIsDragging] = useState(false);

  const stickerWidth = image.width;
  const stickerHeight = stickerImage
    ? (image.width * stickerImage.height) / stickerImage.width
    : 0;

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Backspace" && onMouseOver) {
        console.log("Backspace");
        onDelete(); // 왜 스티커 하나만 삭제되지 않고 여러개가 삭제될까
      }
    });
  });

  return (
    <Group
      draggable
      x={image.x}
      y={image.y}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(event) => {
        setIsDragging(false);
        onDragEnd(event); // 드래그 끝난 지점의 스티커 좌표 저장
      }}
      onMouseOver={() => {
        setOnMouseOver(true);
        console.log(image.id, "스티커가 onMouseOver");
      }}
      onMouseLeave={() => {
        setOnMouseOver(false);
        console.log(image.id, "스티커가 onMouseLeave");
      }}
    >
      <KonvaImage
        ref={imageRef}
        width={width}
        height={height}
        image={stickerImage}
        {...longPressEvent}
      />
      {showDeleteButton && !isDragging && (
        <KonvaImage
          onTouchStart={onDelete}
          onClick={onDelete}
          image={deleteImage}
          width={width}
          height={height}
          offsetX={-stickerWidth / 2 - 20}
        />
      )}
    </Group>
  );
};
