import React from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { GET_ID } from '@/utils/GET_ID';
import CatList from '@/components/catList';

const Aventura = () => {

    const { conteudo, loading } = GET_ID();
    
    if (loading) {
        return <p>Loading...</p>
    };

    console.log('t',conteudo)

    return (
        <>
            <CatList categoria={'Aventura'}>
                {conteudo.map((item) => {
                    <SwiperSlide key={item.id}>
                    <p>{item.original_title}</p>
                    </SwiperSlide>
                })}
            </CatList>
            {conteudo.map((item) => {
                <SwiperSlide key={item.id}>
                <p>{item.original_title}</p>
                </SwiperSlide>
            })}
        </>
    ) 
};

export default Aventura;