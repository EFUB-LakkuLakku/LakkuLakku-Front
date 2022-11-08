import API from "../utils/api";

const HomeService = {
  getUser: (nickname) => API.get(`/api/v1/home/user?nickname=${nickname}`),
  getDiary: (nickname, year, month) => {
    if (year && month) {
      return API.get(`/api/v1/home/diary/${year}/${month}`, {
        nickname: nickname,
      });
    } else {
      return API.get("/api/v1/home/diary", { params: { nickname: nickname } });
    }
  },
  getAlarm: (nickname) => API.get(`/api/v1/home/alarm?nickname=${nickname}`),
};

export default HomeService;
