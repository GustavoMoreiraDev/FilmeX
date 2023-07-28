import React from 'react';
import Image from 'next/image';
import style from './style.module.css';

const CardImg = ({ src }) => {

    return (
        <>
            <Image 
                className={style['card-img']} 
                src={`https://image.tmdb.org/t/p/original${src}`} 
                loading={'lazy'} 
                alt={`Filmex`} 
                height={350} 
                width={156} 
            />
        </>
    )
};

export default CardImg;