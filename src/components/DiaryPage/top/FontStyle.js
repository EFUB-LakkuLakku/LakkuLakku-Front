import React from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import { useDispatch, useSelector } from "react-redux";
import { changeFont } from "../../../modules/note";

const FontStyle = () => {

    const selectedId = useSelector((state) => state.selectedId.selectedId);

    const notes = useSelector((state) => state.note);
    const selectedNoteIdx = notes.findIndex(x => x.id == selectedId);
    const selectedNoteStyle = notes[selectedNoteIdx].style

    const dispatch = useDispatch();

    return (
        <Dropdown
            placeholder="Select an option"
            className="my-className"
            options={[ {label:'본고딕', value:'NotoSansKR-Regular'}, {label:'나눔 고딕 코딩', value:'NanumGothicCoding'}, {label:'감자꽃마을', value:'GamjaFlower-Regular'}, {label:'본명조', value:'SourceHanSerifK-Regular'}, {label:'나눔 손글씨 붓체', value:'NanumBrush'}, {label:'나눔 손글씨 펜체', value:'NanumPen'} ]} 
            value={selectedNoteStyle}
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => {console.log('selected!', value); dispatch(changeFont(selectedId, {style: value.value} ));}} //* value값 이용해서 dispatch! // always fires once a selection happens even if there is no change
            //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            //onOpen={() => console.log('open!')}
        />
      );
};

export default FontStyle;
