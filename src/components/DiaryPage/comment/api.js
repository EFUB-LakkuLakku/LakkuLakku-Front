export const getComments = async () => {
  return [
    {
      diaryId: "1",
      id: "1",
      avatar:
        "https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1519730490919747584%2FaBNirN8-_400x400.jpg",
      content: "First comment", //댓글 내용
      username: "쫑이", //유저 이름
      userId: "1", //댓글을 작성한 유저 id
      parentId: null, //댓글의 부모 id
      createdAt: "2021-08-16T23:00:33.010+02:00", //댓글 생성 시간
      isSecret: false, // 비밀 댓글 여부
    },
    {
      diaryId: "1",
      id: "2",
      avatar:
        "http://thumbnail.10x10.co.kr/webimage/image/basic600/440/B004408698.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false",
      content: "Second comment",
      username: "희진",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
      isSecret: false,
    },
    {
      diaryId: "1",
      id: "3",
      avatar:
        "http://thumbnail.10x10.co.kr/webimage/image/basic600/440/B004408698.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false",
      content: "First comment first child",
      username: "희진",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
      isSecret: false,
    },
    {
      diaryId: "1",
      id: "4",
      avatar:
        "http://thumbnail.10x10.co.kr/webimage/image/basic600/440/B004408698.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false",
      content: "Second comment second child",
      username: "희진",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
      isSecret: false,
    },
  ];
};

export const userProfile = async () => {
  return {
    userId: "",
    avatar:
      "http://thumbnail.10x10.co.kr/webimage/image/basic600/440/B004408698.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false",
    username: "희진",
  };
};

export const createComment = async (text, parentId = null) => {
  return {
    diaryId: "1",
    id: Math.random().toString(36).substr(2, 9),
    avatar:
      "http://thumbnail.10x10.co.kr/webimage/image/basic600/440/B004408698.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false",
    content: text,
    parentId,
    userId: "2",
    username: "희진",
    createdAt: new Date().toISOString(),
    isSecret: false,
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
