import API from "../utils/api";

const HomeService = {
  getMonthly: (nickname) => API.get(`/api/v1/home/diary/${nickname}`),
  getMonthlyByDate: (year, month) =>
    API.get(`/api/v1/home/diary/${year}/${month}`),
  getProfile: (nickname) => API.get(`/api/v1/home/user/${nickname}`),
  getAlarm: (nickname) => API.get(`/api/v1/home/alarm/${nickname}`),
};

export default HomeService;
