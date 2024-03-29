import React, { useRef, useEffect } from "react";
import { Text, Transformer } from "react-konva";
import { changeSelectedId } from "../../../../modules/selectedId"
import { useDispatch, useSelector } from "react-redux";

export function ResizableText({
  note,
  x,
  y,
  width,
  text,
  rotation,
  style,
  weight,
  size,
  align,
  color,
  onDelete,
  isSelected, 
  onChange,
  setIsEditing,
  setShowTextMenu
}) {

  const selectedId = useSelector((state) => state.selectedId.selectedId); //*
  const notes = useSelector((state) => state.note);

  const dispatch = useDispatch();

  const textRef = useRef(null);
  const transformerRef = useRef(null);

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([textRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);


  const transformer = isSelected ? (
    <Transformer
      ref={transformerRef}
      rotateEnabled={true}
      flipEnabled={true}
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
        width={width}
        rotation={rotation}
        text={text}
        ref={textRef}
        //
        fill={color}
        fontFamily={style}
        fontSize={size}
        fontStyle={weight}
        align={align}
        //
        perfectDrawEnabled={false}
        onWheel={onDelete}
        onClick={() => {
          dispatch(changeSelectedId(note.id)); //*
          setIsEditing(false);
          setShowTextMenu(true);
          console.log(note.id);
          console.log(selectedId);
          //console.log(notes);
        }} 
        onTap={() => {
          dispatch(changeSelectedId(note.id)); //*
          setIsEditing(false);
          setShowTextMenu(true);
        }}
        onDblClick={() => {
          dispatch(changeSelectedId(note.id)); //*
          setIsEditing(true);
        }} 
        onDblTap={() => {
          dispatch(changeSelectedId(note.id)); //*
          setIsEditing(true);
        }}
        draggable 
        onDragEnd={(e) => {
          onChange({
            ...note,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransform={() => {
          const node = textRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);

          const textNode = textRef.current;
          const newWidth = textNode.width() * textNode.scaleX();
          const newHeight = textNode.height() * textNode.scaleY();
          textNode.setAttrs({
            width: newWidth,
            scaleX: 1
          });

          onChange({
            ...note,
            width: textNode.width() * scaleX,
            height: newHeight
          });
        }}
        onTransformEnd={(e) => {
          const node = textRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);

          const textNode = textRef.current;
          const newWidth = textNode.width() * textNode.scaleX();
          const newHeight = textNode.height() * textNode.scaleY();
          textNode.setAttrs({
            width: newWidth,
            scaleX: 1
          });

          onChange({
            ...note,
            x: node.x(),
            y: node.y(),
            width: textNode.width() * scaleX,
            height: newHeight,
            rotation: e.target.attrs.rotation

            /*
            // 최소값 지정
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
            */
          });
        }}
      />
      {transformer}
    </>
  );
}

