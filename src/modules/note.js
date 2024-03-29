//1.액션 타입 정의
const ADDNOTE = "note/ADD";
const DELETENOTE = "note/DELETE";
const CHANGENOTE = "note/CHANGE";
const CHANGEFONT = "note/FONTCHANGE";


//2.액션 생성 함수
export const addNoteToPanel = () => ({
  type: ADDNOTE
});

//remove_idx : 삭제할 이미지의 id값
export const deleteNoteOnPanel = (remove_idx) => ({
  type: DELETENOTE,
  remove_idx
});

//idx: 변경할 Image의 id값, newAttrs: 새로운 속성값
export const changeNote = (idx, newAttrs) => ({
  type: CHANGENOTE,
  idx,
  newAttrs
});

export const changeFont = (id, newAttrs) => ({
  type: CHANGEFONT,
  id,
  newAttrs
});


//초기상태
const initialState = [];

//3.리듀서 함수
function note(state = initialState, action) {
  switch (action.type) {
    case ADDNOTE:
      const random_id = String(Math.random() * 100); //String(id)는 빼야되는거 아님??
      const default_content = "Click to resize. Double click to edit.";
      return [
        ...state,
        {
          id: random_id, // 스티커 추가 될 때 마다 id값을 다르게 줘야 다른 스티커라고 인식 가능
          x: 100,
          y: 100,
          width: 200,
          height: 200,
          rotation: 0, //0도부터 시작
          content: default_content,
          //
          style: "NotoSansKR-Regular",
          weight: "normal",
          size: 24,
          align: "left",
          color: "#000000"      
        }
      ];

    case DELETENOTE:
      const newNote = [...state];
      newNote.splice(action.remove_idx, 1); //해당 노트 제거
      return newNote;

    case CHANGENOTE:
      const afterNote = state.slice(); //배열 복제
      afterNote[action.idx] = action.newAttrs; //수정 필요! // 특정 스티커의 속성값 변경
      return afterNote; //afterNote
  
    case CHANGEFONT:
      const afterFont = state.slice(); //배열 복제
      const selectedNoteIdx = afterFont.findIndex(x => x.id == action.id);

      /*
      const selectedNoteIdx = afterFont.map(x => {
        if (x.id === String(action.id)) {
          return afterFont.indexOf(x); 
        }
      });
      */
    
      const newSelectedNote = Object.assign({}, afterFont[selectedNoteIdx], action.newAttrs); 
      console.log(selectedNoteIdx); //정체 확인!!
      console.log(newSelectedNote);
      afterFont.splice(selectedNoteIdx,1,newSelectedNote);
      
      return afterFont;
     
    default:
      return state;
  }
}

export default note;
