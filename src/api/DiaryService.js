import API from "../utils/api";

const DiaryService = {
  getDiaryPaper: () => API.get("/api/v1/diaries/edit/templates"),
  getDiarySticker: () => API.get("/api/v1/diaries/edit/stickers"),
  getCategoryDiarySticker: () =>
    API.get("/api/v1/diaries/edit/stickers/category"),
  likeToggleDiary: (date, diaryId) =>
    API.post(`/api/v1/diaries/${date}/like`, {
      diaryId: diaryId,
    }),
  getDiary: (date, nickname) =>
    API.get(`/api/v1/diaries/${date}?nickname=${nickname}`),
  createDiary: (date) => API.post(`/api/v1/diaries/${date}`),
  deleteDiary: (date) => API.delete(`/api/v1/diaries/${date}`),
};

export default DiaryService;
