import React, {useEffect} from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import { useDispatch, useSelector } from "react-redux";
import note, { changeFont } from "../../../modules/note";

const FontSize = () => {

    const selectedId = useSelector((state) => state.selectedId.selectedId); //selectedId라는 모듈의 selectedId라는 state

    const notes = useSelector((state) => state.note);
    const selectedNoteIdx = notes.findIndex(x => x.id == selectedId);
    const selectedNoteSize = notes[selectedNoteIdx].size

    const dispatch = useDispatch();

    //id = selectedId인 요소를 가져와서 그 요소의 size값을 가져와서, value랑 같으면 그냥 두고 다르면 이걸로 업데이트??

    return (
        <Dropdown
            placeholder="Select an option"
            className="my-className"
            options={['16', '20', '24','28','32']}
            value={String(selectedNoteSize)}
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => { console.log('selected!', value); console.log(selectedId); dispatch(changeFont(selectedId, {size: parseInt(value.value)} )); } } //* value값 이용해서 dispatch! // always fires once a selection happens even if there is no change
            //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            //onOpen={() => console.log('open!')}
        />
      );
};

export default FontSize;
