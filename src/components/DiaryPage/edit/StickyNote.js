import React, { useState, useEffect } from "react";
import { EditableText } from "./EditableText";

export function StickyNote({
  text,
  x,
  y,
  width,
  height,
  onClick,
  onTextResize,
  onTextChange,
  selected,
  onTextClick
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  //const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!selected && isEditing) {
      setIsEditing(false);
    } else if (!selected && isTransforming) {
      setIsTransforming(false);
    }
  }, [selected, isEditing, isTransforming]);

  function toggleEdit() {
    setIsEditing(!isEditing);
    onTextClick(!isEditing);
  }

  function toggleTransforming() {
    setIsTransforming(!isTransforming);
    onTextClick(!isTransforming);
  }

  return (
    <EditableText //텍스트 박스 //하위 컴포넌트로 props 전달!!
      x={x}
      y={y} //'Sticky Note 기준'의 x,y좌표
      text={text}
      width={width}
      height={height}
      onResize={onTextResize}
      isEditing={isEditing}
      isTransforming={isTransforming}
      onToggleEdit={toggleEdit}
      onToggleTransform={toggleTransforming}
      onChange={onTextChange}
      onClick={onClick}
      onTap={onClick}
      //draggable
      //onDragStart={() => setIsDragging(true)}
      //onDragEnd={(e) => {
      //  setIsDragging(false);
      //   x = e.target.x();
      //  y = e.target.y();
      //}}
    />
  );
}