import React, { useState } from "react";

import Search from "@/components/search";
import Carrousel from "@/components/home/carrousel";
import Cards from "@/components/home/cards";
import Ficcao from "@/components/home/generos/ficcao";
import Aventura from "@/components/home/generos/aventura";
import Historia from "@/components/home/generos/historia";
import { CenterBtn } from "@/components/custom/btns";
import Modal from "../custom/modal";

const HomePage = () => {

    const [ modal, setModal ] = useState(false);

    return (
        <>
            <Search />
            <Carrousel />
            <Cards />
            <Ficcao />
            <Aventura click={() => setModal(!modal)} />
            <Historia />
            <CenterBtn conteudo={'Outros Generos'} rota={'/generos'} />
            {modal && ( <Modal click={() => setModal(!modal)} /> )}
        </>
    )
};

export default HomePage;