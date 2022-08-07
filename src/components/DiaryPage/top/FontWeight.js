import React from 'react';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

const FontWeight = () => {


    return (
        <Dropdown
            placeholder="Select an option"
            className="my-className"
            options={['Light', 'Regular', 'Medium','Semibold','Bold']}
            value="Regular"
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            onOpen={() => console.log('open!')}
        />
      );
};

export default FontWeight;
