import React, { useContext } from "react";
import { Autoplay } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import style from './style.module.css';

import { UseFilmeX } from "@/service/filmexContext";

const Ficcao = () => {

    const { dados, loading } = UseFilmeX();

    if (loading) {
        return <p>carregando...</p>
    }

    return (
        <>
            <section className={style['f-container']}>

                <h3>Ficção</h3>
                <Swiper
                    loop={true}
                    spaceBetween={15}
                    slidesPerView={6}
                    autoplay={{
                        delay: 8000,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        dados.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={style['f-card']}>
                                    <Image className={style['f-card-img']} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} height={350} width={156} loading={'lazy'} alt={`Filmex | ${item.title}`} />
                                </div>
                            </SwiperSlide>
                        )) 
                    }
                </Swiper>
            </section>
        </>
    )
};

export default Ficcao;
