import React, { useState, useEffect } from "react";
import { EditableText } from "./EditableText";

export function Note({
  note,
  onDelete,
  isSelected,
  selectShape,
  onChange
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  useEffect(() => {
    if (!isSelected && isEditing) {
      setIsEditing(false);
    } else if (!isSelected && isTransforming) {
      setIsTransforming(false);
    }
  }, [isSelected, isEditing, isTransforming]);

  return (
    <EditableText
      note={note}
      onDelete={onDelete}
      isSelected={isSelected}
      selectShape={selectShape}
      onChange={onChange}
      isEditing={isEditing}
      isTransforming={isTransforming}
      setIsEditing={setIsEditing}
      setIsTransforming={setIsTransforming}
    />
  );
}
