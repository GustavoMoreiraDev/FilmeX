import React from 'react';
import style from './style.module.css';

import { UseCategory } from '@/context/category';
import { BackBtn } from '../custom/btns';

const Sidebar = () => {

    const { setGen } = UseCategory();

    return (
        <>
            <main className={style['s-container']}>
                <BackBtn />
                <section className={style['s-content']}>
                    <MenuItem filter={() => setGen('28')} descricao={'Ação'} />
                    <MenuItem filter={() => setGen('12')} descricao={'Aventura'} />
                    <MenuItem filter={() => setGen('16')} descricao={'Animação'} />
                    <MenuItem filter={() => setGen('35')} descricao={'Comédia'} />
                    <MenuItem filter={() => setGen('80')} descricao={'Crime'} />
                    <MenuItem filter={() => setGen('18')} descricao={'Drama'} />
                    <MenuItem filter={() => setGen('10751')} descricao={'Família'} />
                </section>
            </main>
        </>
    )
};

function MenuItem ({ filter, descricao }) {
    return (
        <button onClick={filter} className={style['s-menu-btn']}>
            {descricao}
        </button>
    )
};

export default Sidebar;