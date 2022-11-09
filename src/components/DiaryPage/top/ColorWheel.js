import React, {useState} from 'react';
import {Wheel} from '@uiw/react-color';
import { useDispatch, useSelector } from "react-redux";
import { changeNote } from "../../../modules/note";


const ColorWheel = () => {
    const [hex, setHex] = useState("#fff");

    const selectedId = useSelector((state) => state.selectedId.selectedId);
    const dispatch = useDispatch();

    return (
        <Wheel
            style={{ marginLeft: 20 }}
            color={hex}
            onChange={(color) => {
                setHex(color.hex);
                console.log(hex);
            }} //* hex값 이용해서 dispatch!
        />    
    );
};

export default ColorWheel;