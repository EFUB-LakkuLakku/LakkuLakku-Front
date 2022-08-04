import API from "../utils/api";

const DiaryService = {
  getDiaryPaper: () => API.get("/api/v1/diaries/edit/templates"),
  getDiarySticker: () => API.get("/api/v1/diaries/edit/stickers"),
  getCategoryDiarySticker: () =>
    API.get("/api/v1/diaries/edit/stickers/category"),
};

export default DiaryService;
