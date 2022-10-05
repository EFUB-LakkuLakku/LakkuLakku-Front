import API from "../utils/api";

const AuthService = {
  logout: () =>
    API.get("/api/v1/users/logout", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }),
  withdrawal: () => API.post("/api/v1/users/withdrawal"),
};

export default AuthService;
