import API from "../utils/api";

const FriendService = {
  getFriendsList: () => API.get("/api/v1/friends"),
  addFriend: (uid) =>
    API.post(`/api/v1/friends`, {
      uid: uid,
    }),
  searchFriend: (uid) =>
    API.post(`/api/v1/friends/search`, {
      uid: uid,
    }),
  deleteFriend: (uid) =>
    API.delete(`/api/v1/friends`, {
      uid: uid,
    }),
};

export default FriendService;
