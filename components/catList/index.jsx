import React from "react";
import { Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import style from './style.module.css';

const CatList = ({ categoria, children }) => {

    return (
        <>
            <section className={style['f-container']}>

                <h3>{categoria}</h3>
                <Swiper loop={true} spaceBetween={15} slidesPerView={6} autoplay={{ delay: 8000 }}
                    modules={[Autoplay]} className="mySwiper"
                >
                    {children}
                </Swiper>

            </section>
        </>
    )
};

export default CatList;
