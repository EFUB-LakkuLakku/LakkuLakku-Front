import React, {useState} from 'react';
import {Wheel} from '@uiw/react-color';

const ColorWheel = () => {
    const [hex, setHex] = useState("#fff");

    return (
        <Wheel
            style={{ marginLeft: 20 }}
            color={hex}
            onChange={(color) => {
                setHex(color.hex);
            }}
        />    
    );
};

export default ColorWheel;