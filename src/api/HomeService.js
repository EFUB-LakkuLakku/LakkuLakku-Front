import API from "../utils/api";

const HomeService = {
  getHomeMain: (nickname) => API.get("/api/v1/home", { nickname: nickname }),
};

export default HomeService;
