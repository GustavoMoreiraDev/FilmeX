"use client";

import React, { createContext, useContext, useState } from 'react';

export const ControllerContext = createContext({});

const ControlProv = ({ children }) => {

    const [ avent, setAvent ] = useState([]);

    const DataAvent = (i) => { setAvent([i])};

    console.log('teste', avent);
''
    return (
        <ControllerContext.Provider value={{ avent, DataAvent }}>
            {children}
        </ControllerContext.Provider>
    )
};

export const UseControll =() => {
    return useContext(ControllerContext);
};

export default ControlProv;