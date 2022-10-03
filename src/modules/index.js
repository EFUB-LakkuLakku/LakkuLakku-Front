import { combineReducers } from "redux";
import sticker from "./sticker";
import image from "./image";
import paper from "./paper";
import diary from "./diary";
import note from "./note";

// 하나의 리듀서로 만듬
const rootReducer = combineReducers({
  sticker,
  image,
  paper,
  diary,
  note
});

export default rootReducer;
