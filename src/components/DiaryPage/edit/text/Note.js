import React, { useState, useEffect } from "react";
import { EditableText } from "./EditableText";

export function Note({
  note,
  onDelete,
  isSelected,
  onChange,
  setShowTextMenu
}) {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isSelected && isEditing) {
      setIsEditing(false);
    } 
  }, [isSelected, isEditing]);

  return (
    <EditableText
      note={note}
      onDelete={onDelete}
      isSelected={isSelected}
      onChange={onChange}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      setShowTextMenu={setShowTextMenu}
    />
  );
}
