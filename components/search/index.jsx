import React from "react";
import { Input } from "@nextui-org/react";
import style from './style.module.css';

const Search = () => {

    return (
        <>
            <header className={style['s-container']}>
                <div className={style['s-input-wrapper']}>
                    <Input status={'error'} color={'error'} placeholder={'Pesquisar por titulo'} underlined fullWidth={true} clearable={true} />
                </div>
            </header>
        </>
    )
};

export default Search;