import React from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import { useDispatch, useSelector } from "react-redux";
import { changeFont } from "../../../modules/note";

const FontSize = () => {

    const selectedId = useSelector((state) => state.selectedId.selectedId);
    const dispatch = useDispatch();

    return (
        <Dropdown
            placeholder="Select an option"
            className="my-className"
            options={['16', '20', '24','28','32']}
            value="24"
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => { console.log('selected!', value); dispatch(changeFont(selectedId, {size: parseInt(value.value)} )); } } //* value값 이용해서 dispatch! // always fires once a selection happens even if there is no change
            //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            //onOpen={() => console.log('open!')}
        />
      );
};

export default FontSize;
