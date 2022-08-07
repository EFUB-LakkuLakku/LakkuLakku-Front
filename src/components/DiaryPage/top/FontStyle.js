import React from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

const FontStyle = () => {


    return (
        <Dropdown
            placeholder="Select an option"
            className="my-className"
            options={['본고딕', '나눔 고딕 코딩', '감자꽃마을', '본명조', '나눔 손글씨 붓체', '나눔 손글씨 펜체']}
            value="본고딕"
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            onOpen={() => console.log('open!')}
        />
      );
};

export default FontStyle;
