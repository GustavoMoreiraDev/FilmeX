import React from "react";
import { UseCategory } from "@/context/category";
import style from './style.module.css';

import CardImg from "@/components/custom/cardImg";
import { Loading } from "@/components/loading";

const Glist = () => {

    const { conteudo, loading } = UseCategory();

    return (
        <>
            <section className={style['gl-container']}>
                <div className={style['gl-content']}>
                    {
                        loading ?
                        (<Loading />) 
                            :
                            (
                                conteudo.map((item) => (
                                    <div className={style['gl-card']} key={item.id}>
                                        <CardImg src={item.poster_path} />
                                    </div>
                                ))
                                )
                    }
                </div>
            </section>
        </>
    )
};

export default Glist;