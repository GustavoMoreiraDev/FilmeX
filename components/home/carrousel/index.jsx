import React from "react";
import { UseFilmeX } from "@/service/filmexContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import style from './style.module.css';

import "swiper/css/autoplay";
import "swiper/css";

const Carrousel = () => {

    const { dados, loading } = UseFilmeX();
    const img = "https://image.tmdb.org/t/p/original";

    const swiperOptions = {
        modules: [Autoplay],
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        loop: true,
    };
    
    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <main className={style['c-container']}>
                <Swiper {...swiperOptions} className="mySwiper">
                    {dados.map((item) => (
                        <SwiperSlide className={style['c-content-slider']} key={item.id}>
                            <Image
                                className={style['c-content-slider-img']}
                                src={`${img}${item.backdrop_path}`}
                                width={1920}
                                height={1080}
                                loading={'lazy'}
                                alt={`FilmeX | ${item.title}`}
                            />
                            <h1>{item.title}</h1>
                            <p>{item.overview}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </>
    );
};

export default Carrousel;
