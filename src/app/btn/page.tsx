"use client"

import { useState } from "react";


const Btn = () => {

    const [value, setvalue] = useState(0);

    const handleClick = (newvalue: any) => {
        setvalue(newvalue)
    }


    return (
        <>
            <button className={value == 0 ? "btn-selected" : "btn"} onClick={() => handleClick(0)}>0</button>
            <button className={value == 1 ? "btn-selected" : "btn"} onClick={() => handleClick(1)}>1</button>
            <button className={value == 2 ? "btn-selected" : "btn"} onClick={() => handleClick(2)}>2</button>
        </>
    )
}


export default Btn;
