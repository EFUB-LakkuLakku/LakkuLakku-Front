import React, { useState, useEffect } from "react";
import { ResizableText } from "./ResizableText";
import { EditableTextInput } from "./EditableTextInput";

//const RETURN_KEY = 13;  //엔터시 줄바꿈되도록, 없애기
//const ESCAPE_KEY = 27;

export function EditableText({
  note,
  onDelete,
  isSelected,
  onChange,
  isEditing,
  isTransforming,
  setIsEditing,
  setIsTransforming,
  onToggleTransform
}) {
  /*
  function handleEscapeKeys(e) {
    if ((e.keyCode === RETURN_KEY && !e.shiftKey) || e.keyCode === ESCAPE_KEY) {
      setIsEditing(!isEditing);
    }
  }
  */

  if (isEditing) {
    return (
      <EditableTextInput
        x={note.x}
        y={note.y}
        width={note.width}
        height={note.height}
        value={note.content}
        rotation={note.rotation}
        //
        textstyle={note.style}
        weight={note.weight}
        size={note.size}
        align={note.align}
        color={note.color}
        //
        onTextChange={(e) =>
          onChange({ ...note, content: e.currentTarget.value })
        }
        //onKeyDown={handleEscapeKeys}
      />
    );
  }
  return (
    <ResizableText
      note={note}
      x={note.x}
      y={note.y}
      width={note.width}
      text={note.content}
      rotation={note.rotation}
      //
      style={note.style}
      weight={note.weight}
      size={note.size}
      align={note.align}
      color={note.color}
      //      
      onDelete={onDelete}
      isSelected={isSelected}
      isTransforming={isTransforming} 
      setIsEditing={setIsEditing}
      setIsTransforming={setIsTransforming}
      onChange={onChange}
    />
  );
}
