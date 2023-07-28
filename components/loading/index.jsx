import React from 'react';
import style from './style.module.css';

export const Loading = () => {

    return (
        <>
            <div className={style['l-container']}>
                <div className={style['l-spinner']} />
            </div>
        </>
    )
};