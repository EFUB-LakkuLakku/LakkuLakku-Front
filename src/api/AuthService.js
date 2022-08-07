import API from "../utils/api";

const AuthService = {
  logout: () => API.get("/api/v1/users/logout"),
  withdrawal: () => API.post("/api/v1/users/withdrawal"),
};

export default AuthService;
