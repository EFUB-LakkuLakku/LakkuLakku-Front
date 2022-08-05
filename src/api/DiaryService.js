import API from "../utils/api";

const DiaryService = {
  getDiaryPaper: () => API.get("/api/v1/diaries/edit/templates"),
  getDiarySticker: () => API.get("/api/v1/diaries/edit/stickers"),
  getCategoryDiarySticker: () =>
    API.get("/api/v1/diaries/edit/stickers/category"),
  postDiaryLike: (date, req) => API.post(`/api/v1/diaries/${date}/like`, req),
  getDiary: (date) => API.get(`/api/v1/diaries/${date}`),
  createDiary: (date) => API.post(`/api/v1/diaries/${date}`),
};

export default DiaryService;
