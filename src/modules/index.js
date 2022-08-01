import { combineReducers } from "redux";
import sticker from "./sticker";
import image from "./image";
// 하나의 리듀서로 만듬
const rootReducer = combineReducers({
  sticker,
  image,
});

export default rootReducer;
