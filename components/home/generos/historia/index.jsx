import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { GET_ID } from '@/utils/GET_ID';
import style from './style.module.css';

import { Loading } from '@/components/loading';
import CatList from '@/components/custom/catList';
import CardImg from '@/components/custom/cardImg';

const Historia = () => {
    
    const { conteudo, loading } = GET_ID({ genero: '36', page: '2' });

    return (
        <>
            <CatList categoria={'Historia'}>
                {conteudo.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={style['f-card']}>
                            {loading ? 
                                ( <Loading /> ) 
                                : 
                                ( <CardImg src={item.poster_path} /> )
                            }
                        </div>
                    </SwiperSlide>
                ))}
            </CatList>         
        </>
    ) 
};

export default Historia;
