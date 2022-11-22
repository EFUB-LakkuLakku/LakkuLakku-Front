const CHANGESELECTEDID = "selectedId/CHANGE";

export const changeSelectedId = (noteId) => ({
  type: CHANGESELECTEDID,
  noteId
});

const initialState = {
  selectedId: null
};
//state 정의!
function selectedId(state = initialState, action) {
  switch (action.type) {
    case CHANGESELECTEDID: //액션!
      return {
        selectedId: action.noteId //인자 가져올 때 앞에 'action.' 붙여주기!
      }; //parseInt(action.noteId)
    default:
      return state;
  }
}

export default selectedId;