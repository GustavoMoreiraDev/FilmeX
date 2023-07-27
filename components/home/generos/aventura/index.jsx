import React from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import CatList from '@/components/catList';
import { GET_ID } from '@/utils/GET_ID';
import style from './style.module.css';

const Aventura = () => {

    const { conteudo, loading } = GET_ID({ genero: '28', page: '4' });

    return (
        <>
            <CatList categoria={'Aventura'}>
                {conteudo.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={style['f-card']}>
                            {loading ? 
                                (
                                    <p>loading...</p>
                                ) : (
                                    <Image 
                                        className={style['f-card-img']} 
                                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`} 
                                        loading={'lazy'} 
                                        alt={`Filmex`} 
                                        height={350} 
                                        width={156} 
                                    />
                                )
                            }
                        </div>
                    </SwiperSlide>
                ))}
            </CatList>         
        </>
    ) 
};

export default Aventura;