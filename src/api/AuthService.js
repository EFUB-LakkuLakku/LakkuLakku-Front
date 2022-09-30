import API from "../utils/api";

const AuthService = {
  logout: () => API.get("/api/v1/users/logout"),
  withdrawal: () => API.post("/api/v1/users/withdrawal"),
  findPassword: (email) =>
    API.post(`/api/v1/users/certification/sends`, { email: email }),
  checkVerificationCode: (body) =>
    API.post("/api/v1/users/certification/comfirms", body),
};

export default AuthService;
