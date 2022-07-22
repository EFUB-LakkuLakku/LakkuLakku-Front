import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import "./comment.css";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
  userProfile as userProfileApi,
} from "./api";

const Comments = ({ currentUserId }) => {
  const init = {
    userId: "",
    avatar: "",
    username: "",
  };
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const [userProfile, setUserProfile] = useState(init);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, content: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    deleteCommentApi().then(() => {
      const updatedBackendComments = backendComments.filter(
        (backendComment) => backendComment.id !== commentId
      );
      setBackendComments(updatedBackendComments);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
    userProfileApi().then((profile) => {
      setUserProfile(profile);
    });
  }, []);

  console.log(userProfile);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <CommentForm
        submitLabel="등록"
        handleSubmit={addComment}
        userProfile={userProfile}
      />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
            userProfile={userProfile}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
