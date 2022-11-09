import { Transform } from "konva/lib/Util";
import React from "react";
import { Html } from "react-konva-utils";

function getStyle(x, y, width, height, rotation, textstyle, weight, size, align, color) {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  const baseStyle = {
    width: `${width + 6}px`,
    height: `${height + 10}px`,
    border: "none",
    padding: "0px",
    margin: "0px",
    background: "none",
    outline: "none",
    resize: "none",
    //
    colour: "black",
    fontSize: "24px",
    fontFamily: "sans-serif",
    //
    top: `${x}px`,
    left: `${y}px`,
    transform: `rotateZ(${rotation}deg)`, //아래 꺼랑 같이 적용!!
    transformOrigin: "left top"
  };
  if (isFirefox) {
    return baseStyle;
  }
  return {
    ...baseStyle,
    margintop: "-4px"
  };
}

export function EditableTextInput({
  x,
  y,
  width,
  height,
  rotation,
  textstyle,
  weight,
  size,
  align,
  color,
  value,
  onTextChange,
  onKeyDown
}) {
  const style = getStyle(x, y, width, height, rotation, textstyle, weight, size, align, color
);
  return (
    <Html groupProps={{ x, y }} divProps={{ style: { opacity: 1 } }}>
      <textarea
        value={value}
        onChange={(e) => onTextChange(e)}
        onKeyDown={onKeyDown}
        style={style}
      />
    </Html>
  );
}
