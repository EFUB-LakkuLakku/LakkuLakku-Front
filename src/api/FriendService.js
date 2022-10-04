import API from "../utils/api";

const FriendService = {
  getFriends: () => API.get("/api/v1/friends"),
  deleteFriend: () => API.delete("/api/v1/friends"),
  searchFriend: (uid) => API.post("/api/v1/friends", { uid }),
  addFriend: (uid) => API.post("/api/v1/friends", { uid }),
};

export default FriendService;
