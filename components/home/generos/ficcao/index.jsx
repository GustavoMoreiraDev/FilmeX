import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { GET_ID } from '@/utils/GET_ID';
import style from './style.module.css';

import { Loading } from '@/components/loading';
import CardImg from '@/components/custom/cardImg';
import CatList from '@/components/custom/catList';

const Ficcao = () => {
    
    const { conteudo, loading } = GET_ID({ genero: '14', page: '4' });

    return (
        <>
            <CatList categoria={'Ficção'}>
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

export default Ficcao;
