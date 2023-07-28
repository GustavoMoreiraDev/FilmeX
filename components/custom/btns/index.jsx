import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowCircleLeft } from 'react-icons/fa';
import style from './style.module.css';

export const CenterBtn = ({ conteudo, rota }) => {

    return (
        <>
            <div className={style['c-btn-wrap']}>
                <Link className={style['c-btn']} href={rota} alt={'Filmex'}>
                    {conteudo}
                </Link>
            </div>
        </>
    )
};

export const BackBtn = () => {
    
    const { back } = useRouter();

    return (
        <div className={style['b-btn-wrap']}>
            <button onClick={() => back()}>
                <FaArrowCircleLeft /> Voltar
            </button>
        </div>
    )
};