import React from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import { useDispatch, useSelector } from "react-redux";
import { changeNote } from "../../../modules/note";

const FontStyle = () => {

    const selectedId = useSelector((state) => state.selectedId.selectedId);
    const dispatch = useDispatch();

    return (
        <Dropdown
            placeholder="Select an option"
            className="my-className"
            options={['본고딕', '나눔 고딕 코딩', '감자꽃마을', '본명조', '나눔 손글씨 붓체', '나눔 손글씨 펜체']} //수정 필요!
            value="본고딕"
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => console.log('selected!', value)} //* value값 이용해서 dispatch! // always fires once a selection happens even if there is no change
            //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            //onOpen={() => console.log('open!')}
        />
      );
};

export default FontStyle;
