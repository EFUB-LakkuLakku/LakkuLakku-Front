import { useState, useEffect } from "react";
import "./comment.css";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
  userProfile,
}) => {
  const [text, setText] = useState(initialText);
  const [cnt, setCnt] = useState(null);
  const [warning, setWarning] = useState("");
  const isTextareaDisabled = text.length === 0 || text.length > 200;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  useEffect(() => {
    if (text.length <= 200) {
      setCnt(text.length);
      setWarning("");
    } else {
      setWarning("200자 이하로 작성해주세요.");
    }
  }, [text]);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-wrapper">
        <div className="profile-leftside-container">
          <div className="profile-image-container">
            <img src={userProfile.avatar} />
          </div>
          <div className="comment-author">
            <div className="comment-author-text"> {userProfile.username}</div>
          </div>
        </div>
        <textarea
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="comment-form-bottom">
          <div className="comment-form-bottom-right">
            <div className="text-counter">
              <div className="cnt-text">{cnt}/200</div>
            </div>
            <div className="text-cnt-warning">{warning}</div>
          </div>
          <div className="button-wrapper">
            <button
              className="comment-form-button"
              disabled={isTextareaDisabled}
            >
              {submitLabel}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
