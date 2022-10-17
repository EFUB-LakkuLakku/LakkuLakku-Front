import API from "../utils/api";

const FriendService = {
  getFriends: () => API.get("/api/v1/friends"),
  deleteFriend: (uid) =>
    API.delete("/api/v1/friends", {
      data: {
        uid: uid,
      },
    }),
  searchFriend: (uid) => API.post("/api/v1/friends/search", { uid }),
  addFriend: (uid) => API.post("/api/v1/friends", { uid }),
};

export default FriendService;
