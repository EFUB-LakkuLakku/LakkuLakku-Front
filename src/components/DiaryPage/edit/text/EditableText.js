import React, { useState, useEffect } from "react";
import { ResizableText } from "./ResizableText";
import { EditableTextInput } from "./EditableTextInput";

const RETURN_KEY = 13;
const ESCAPE_KEY = 27;

export function EditableText({
  note,
  onDelete,
  isSelected,
  selectShape,
  onChange,
  isEditing,
  isTransforming,
  setIsEditing,
  setIsTransforming,
  onToggleTransform
}) {
  function handleEscapeKeys(e) {
    if ((e.keyCode === RETURN_KEY && !e.shiftKey) || e.keyCode === ESCAPE_KEY) {
      setIsEditing(!isEditing);
    }
  }

  if (isEditing) {
    return (
      <EditableTextInput
        x={note.x}
        y={note.y}
        width={note.width}
        height={note.height}
        value={note.content}
        rotation={note.rotation}
        onTextChange={(e) =>
          onChange({ ...note, content: e.currentTarget.value })
        }
        onKeyDown={handleEscapeKeys}
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
      onDelete={onDelete}
      isSelected={isSelected}
      selectShape={selectShape}
      isTransforming={isTransforming} 
      setIsEditing={setIsEditing}
      setIsTransforming={setIsTransforming}
      onChange={onChange}
    />
  );
}
