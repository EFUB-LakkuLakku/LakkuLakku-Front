import React, { useEffect, useRef, useState } from "react";
import EmojiSVG from "../../../assets/plus-square.svg";
import Picker from "emoji-picker-react";
import "./EmojiPicker.css";

export const EmojiPicker = ({ disabled }) => {
  const [showEmojiPicker, togglePicker] = useState(() => false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const toggleEmojiPicker = () => togglePicker((prev) => !prev);
  const onEmojiClick = (e, emojiObject) => {
    console.log(emojiObject);
    e.preventDefault();
    setChosenEmoji(emojiObject);
    toggleEmojiPicker();
  };

  const refPicker = useClickOutPicker(() => {
    showEmojiPicker && togglePicker(false);
  });

  return (
    <div ref={refPicker} className="EmojiPicker">
      {chosenEmoji ? (
        <span className="Emoji__Container" onClick={() => togglePicker(true)}>
          {chosenEmoji.emoji}
        </span>
      ) : (
        <button
          disabled={true}
          type="button"
          className="EmojiPicker__Btn"
          onClick={toggleEmojiPicker}
        >
          <img alt="Add Emoji" src={EmojiSVG} />
        </button>
      )}

      {showEmojiPicker && (
        <div className="EmojiPicker__Wrapper">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
};

/* 바깥 영역 클릭했을때 이모지 선택창 꺼주는 역할*/
const useClickOutPicker = (cb) => {
  const ref = useRef(null);
  useEffect(() => {
    const clickOut = (e) => {
      if (!ref.current.contains(e.target)) {
        cb(e);
      }
    };
    window.addEventListener("click", clickOut);
    return () => {
      window.removeEventListener("click", clickOut);
    };
  }, [cb]);
  return ref;
};
