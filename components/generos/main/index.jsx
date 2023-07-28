import React from "react";
import style from './style.module.css';

const Gmain = ({ children }) => {

    return (
        <>
            <main className={style['gm-container']}>
                {children}
            </main>
        </>
    )
};

export default Gmain;