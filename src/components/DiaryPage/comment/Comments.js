import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import "./comment.css";
import API from "../../../utils/api";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { plusComment, minusComment } from "../../../modules/diary";

const Comments = () => {
  const init = {
    userId: "",
    avatar: "",
    username: "",
  };
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const [userProfile, setUserProfile] = useState(init);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId == null
  );
  const [diaryId, setDiaryId] = useState("");
  const [diaryDate, setDiaryDate] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const { pathname } = useLocation();
  const params = pathname.split("/");
  const dates = params[4];

  async function getComments() {
    try {
      const response = await API.get(`/api/v1/diaries/${dates}`, {
        params: { nickname: localStorage.getItem("nickname") },
      });

      setDiaryId(response.data.diary.id);
      setDiaryDate(response.data.diary.date);
      setBackendComments(response.data.commentList);
      //console.log(response.data.commentList);

      const id = localStorage.getItem("id");
      setCurrentUserId(id);
      //console.log(currentUserId);

      const user = {
        userId: id,
        avatar: localStorage.getItem("profileImage"),
        username: localStorage.getItem("nickname"),
      };
      //console.log(user);
      setUserProfile(user);
    } catch (err) {
      console.error(err);
    }
  }

  async function addComment(text, parentId) {
    try {
      const response = await API.post(`/api/v1/diaries/${diaryDate}/comments`, {
        diaryId: diaryId,
        content: text,
        isSecret: false,
        parentId: parentId,
      });
      //console.log(response.data);
      dispatch(plusComment()); // 댓글 수 증가
      //임시 프로필 설정 -> 유진님이 저장해주시면, getcomment 부분으로 옮겨서 조회할때 받아오기

      setBackendComments([response.data, ...backendComments]);
      setActiveComment(null);
    } catch (err) {
      console.error(err);
    }
  }

  async function updateComment(text, commentId) {
    try {
      const response = await API.put(
        `/api/v1/diaries/${diaryDate}/comments/${commentId}`,
        {
          diaryId: diaryId,
          content: text,
          isSecret: false,
        }
      );

      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, content: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteComment(commentId) {
    try {
      const response = await API.delete(
        `/api/v1/diaries/${diaryDate}/comments/${commentId}`
      );
      dispatch(minusComment()); //댓글 수 감소
      const updatedBackendComments = backendComments.filter(
        (backendComment) => backendComment.id !== commentId
      );
      setBackendComments(updatedBackendComments);
    } catch (err) {
      console.error(err);
    }
  }

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime()
      );

  useEffect(() => {
    getComments();
  }, []);
  const dispatch = useDispatch();
  //rootComments.map((rootComment) => console.log(rootComment.userId));
  return (
    <div className="comments">
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
