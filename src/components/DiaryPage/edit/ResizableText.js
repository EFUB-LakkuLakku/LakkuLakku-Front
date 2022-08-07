import React, { useRef, useEffect } from "react";
import { Text, Transformer } from "react-konva";

export function ResizableText({
  x,
  y,
  text,
  isSelected,
  width,
  onResize,
  onClick,
  onDoubleClick
}) {
  const textRef = useRef(null);
  const transformerRef = useRef(null);

  useEffect(() => {
    if (isSelected && transformerRef.current !== null) {
      transformerRef.current.nodes([textRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  function handleResize() {
    if (textRef.current !== null) {
      const textNode = textRef.current;
      const newWidth = textNode.width() * textNode.scaleX();
      const newHeight = textNode.height() * textNode.scaleY();
      textNode.setAttrs({
        width: newWidth,
        scaleX: 1
      });
      onResize(newWidth, newHeight);
    }
  }

  const transformer = isSelected ? (
    <Transformer
      ref={transformerRef}
      flipEnabled={false}
      enabledAnchors={["middle-left", "middle-right"]}
      boundBoxFunc={(oldBox, newBox) => {
        newBox.width = Math.max(30, newBox.width);
        return newBox;
      }}
    />
  ) : null;

  return (
    <>
      <Text
        x={x}
        y={y}
        ref={textRef}
        text={text}
        fill="black"
        fontFamily="sans-serif"
        fontSize={24}
        perfectDrawEnabled={false}
        onTransform={handleResize}
        onClick={onClick}
        onTap={onClick}
        onDblClick={onDoubleClick}
        onDblTap={onDoubleClick}
        width={width}
      />
      {transformer}
    </>
  );
}