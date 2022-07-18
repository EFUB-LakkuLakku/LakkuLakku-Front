import React from "react";
import Comments from "./comment/Comments";

function DiaryPage() {
  return (
    <div>
      <h1>DiaryPage</h1>
      <Comments currentUserId="2" />
    </div>
  );
}

export default DiaryPage;
