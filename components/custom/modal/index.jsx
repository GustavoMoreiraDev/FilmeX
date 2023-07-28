import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GET_ID } from "@/utils/GET_ID";
import style from './style.module.css';

import { Loading } from "@/components/loading";

const Modal = ({ click }) => {

    const { info, loading } = GET_ID({ id :'447365'})

    return (
        <div onClick={click} className={style['modal-container']}>
            <div className={style['m-content']}>
                { loading ?
                    (
                        <Loading />
                    ) :
                    ( 
                        <>
                            <Image className={style['m-content-img']} src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} loading={'lazy'} width={850} height={550} alt={'Filmex'} />                           
                            <div className={style['m-info']}>
                                <div className={style['m-info-left']}>
                                    <h2>{info.title}</h2>
                                    <p>{info.overview}</p>
                                </div>
                                <div className={style['m-info-right']}>
                                    <Link href={info.homepage} target={'_blank'} alt={'Filmex'}>
                                        Site oficial
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div> 
    )
};

export default Modal;