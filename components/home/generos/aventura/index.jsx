import React from 'react';
import { GET } from '@/utils/GET';
import { SwiperSlide } from 'swiper/react';
import { UseControll } from '@/context/controller';
import style from './style.module.css';

import { Loading } from '@/components/loading';
import CardImg from '@/components/custom/cardImg';
import CatList from '@/components/custom/catList';

const Aventura = ({ click }) => {

    const { DataAvent } = UseControll();
    const { conteudo, loading } = GET({ genero: '28', page: '4' });

    const handleClick = (item) => { DataAvent(item); click()};
    return (
        <>
            <CatList categoria={'Aventura'}>
                {conteudo.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div onClick={() => handleClick()} className={style['f-card']}>
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

export default Aventura;