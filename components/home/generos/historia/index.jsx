import React from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import CatList from '@/components/catList';
import { GET_ID } from '@/utils/GET_ID';
import style from './style.module.css';

const Historia = () => {
    
    const { conteudo, loading } = GET_ID({ genero: '36', page: '2' });

    return (
        <>
            <CatList categoria={'Historia'}>
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

export default Historia;
