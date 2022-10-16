import API from "../utils/api";

const AuthService = {
  logout: () =>
    API.get("/api/v1/users/logout", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    }),
  withdrawal: () => API.post("/api/v1/users/withdrawal"),
  findPassword: (email) =>
    API.post(`/api/v1/users/certification/sends`, { email: email }),
  checkVerificationCode: (body) =>
    API.post("/api/v1/users/certification/comfirms", body),
  changePassword: (body) =>
    API.post("/api/v1/users/certification/new-password", body),
};

export default AuthService;
