import React, { useState, useEffect } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import style from './style.module.css';

const CatList = ({ categoria, children }) => {

    const [ ajuste, setAjuste ] = useState(6);

    useEffect(() => {
        setAjuste(() => window.innerWidth >= 1193 ? 6 : 4 && window.innerWidth > 606 ? 3 : 3);
    },[]);

    return (
        <>
            <section className={style['f-container']}>
                <h3>{categoria}</h3>
                <Swiper loop={true} spaceBetween={15} slidesPerView={ajuste} autoplay={{ delay: 8000 }}
                    modules={[Autoplay]} className="mySwiper"
                >
                    {children}
                </Swiper>
            </section>
        </>
    )
};

export default CatList;
