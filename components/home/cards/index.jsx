import React from "react";
import Image from "next/image";
import { UseFilmeX } from "@/service/filmexContext";
import { Swiper, SwiperSlide } from "swiper/react";
import style from './style.module.css';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper";

const Cards = () => {

    const { dados, loading } = UseFilmeX();
    const img = "https://image.tmdb.org/t/p/original";

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <section className={style['c-container']}>
                <Swiper
                    loop={true}
                    grabCursor={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 5000,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 4,
                        slideShadows: true,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper"
                >
                    {
                        dados.map((item) => (
                            <SwiperSlide className={style['c-cards']} key={item.id}>
                                <Image className={style['c-card-img']} src={`${img}${item.poster_path}`} height={350} width={156} loading={'lazy'} alt={`FilmeX | ${item.title}`} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </>
    )
};

export default Cards;