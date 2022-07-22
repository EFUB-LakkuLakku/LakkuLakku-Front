import CommentForm from "./CommentForm";
import "./comment.css";
import { useState } from "react";
import Reply from "../../../assets/reply.svg";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
  userProfile,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const canReply = parentId ? false : true;
  const canDelete = currentUserId === comment.userId && replies.length === 0;
  const canEdit = currentUserId === comment.userId;
  const replyId = parentId ? parentId : comment.id;

  const createdAtTime = () => {
    const year = new Date(comment.createdAt).getFullYear();
    const month = new Date(comment.createdAt).getMonth() + 1;
    const date = new Date(comment.createdAt).getDate();
    const hour = new Date(comment.createdAt).getHours();
    const min = new Date(comment.createdAt).getMinutes();
    return (
      year + "년 " + month + "월 " + date + "일 " + hour + "시 " + min + "분"
    );
  };

  const timeShown = () => {
    const timePassed = new Date() - new Date(comment.createdAt).getTime();
    if (timePassed < 60000) return Math.floor(timePassed / 1000) + "초";
    else if (timePassed < 3600000) return Math.floor(timePassed / 60000) + "분";
    else if (timePassed < 24 * 3600000)
      return Math.floor(timePassed / 3600000) + "시간";
    else return null;
  };

  return (
    <div key={comment.id} className={parentId ? "comment-reply" : "comment"}>
      {isEditing && (
        <CommentForm
          submitLabel="등록"
          hasCancelButton
          initialText={comment.content}
          handleSubmit={(text) => updateComment(text, comment.id)}
          handleCancel={() => {
            setActiveComment(null);
          }}
          userProfile={userProfile}
        />
      )}
      {!isEditing && (
        <div className={parentId ? "comment-wrapper-reply" : "comment-wrapper"}>
          <div className="profile-container">
            <div className="profile-leftside-container">
              {parentId && (
                <img
                  src={Reply}
                  className="comment-reply-icon"
                  width={"16rem"}
                  height={"16rem"}
                />
              )}
              <div className="profile-image-container">
                <img src={comment.avatar} />
              </div>
              <div className="comment-author">
                <div className="comment-author-text"> {comment.username}</div>
              </div>
            </div>
            <div className="profile-rightside-container">
              <div className="comment-time-text">{timeShown()}</div>
            </div>
          </div>
          <div className="comment-content-part">
            <div className="comment-content">
              <div className="comment-text">{comment.content}</div>
            </div>
          </div>
          <div className="comment-bottom-part">
            <div className="comment-bottom-left">
              {canReply && (
                <div
                  className="comment-action"
                  onClick={() =>
                    setActiveComment({ id: comment.id, type: "replying" })
                  }
                >
                  답글 달기
                </div>
              )}
              {canEdit && (
                <div
                  className="comment-action"
                  onClick={() =>
                    setActiveComment({ id: comment.id, type: "editing" })
                  }
                >
                  수정하기
                </div>
              )}
              {canDelete && (
                <div
                  className="comment-action"
                  onClick={() => deleteComment(comment.id)}
                >
                  삭제하기
                </div>
              )}
            </div>
            <div className="comment-bottom-right">
              <div className="comment-time-text">{createdAtTime()}</div>
            </div>
          </div>
        </div>
      )}
      <div />
      {isReplying && (
        <CommentForm
          submitLabel="등록"
          handleSubmit={(text) => addComment(text, replyId)}
          userProfile={userProfile}
        />
      )}
      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              comment={reply}
              key={reply.id}
              setActiveComment={setActiveComment}
              activeComment={activeComment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              addComment={addComment}
              parentId={comment.id}
              replies={[]}
              currentUserId={currentUserId}
              userProfile={userProfile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
