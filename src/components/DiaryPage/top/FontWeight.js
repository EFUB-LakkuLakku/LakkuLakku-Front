import React from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import { useDispatch, useSelector } from "react-redux";
import { changeFont } from "../../../modules/note";

const FontWeight = () => {

    const selectedId = useSelector((state) => state.selectedId.selectedId);

    const notes = useSelector((state) => state.note);
    const selectedNoteIdx = notes.findIndex(x => x.id == selectedId);
    const selectedNoteWeight = notes[selectedNoteIdx].weight

    const dispatch = useDispatch();

    return (
        <Dropdown
            placeholder="Select an option"
            className="my-className"
            options={[ {label:'보통', value:'normal'}, {label:'굵음', value: 'bold'} ]}
            value={selectedNoteWeight}
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => {console.log('selected!', value); dispatch(changeFont(selectedId, {weight: value.value} ));}} //* value값 이용해서 dispatch! // always fires once a selection happens even if there is no change
            //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            //onOpen={() => console.log('open!')}
        />
      );
};

export default FontWeight;
