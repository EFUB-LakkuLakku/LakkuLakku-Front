import API from "../utils/api";

const HomeService = {
  getHomeMain: () => API.get("/api/v1/home"),
};

export default HomeService;
