import { combineReducers } from "redux";
import sticker from "./sticker";
import image from "./image";
import paper from "./paper";
import diary from "./diary";
// 하나의 리듀서로 만듬
const rootReducer = combineReducers({
  sticker,
  image,
  paper,
  diary,
});

export default rootReducer;
