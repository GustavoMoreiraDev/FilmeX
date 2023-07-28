"use client";

import Search from "@/components/search";
import Carrousel from "@/components/home/carrousel";
import Cards from "@/components/home/cards";
import Ficcao from "@/components/home/generos/ficcao";
import Aventura from "@/components/home/generos/aventura";
import Historia from "@/components/home/generos/historia";
import { CenterBtn } from "@/components/custom/btns";

export default function Home() {

  return (
    <>
      <Search />
      <Carrousel />
      <Cards />
      <Ficcao />
      <Aventura />
      <Historia />
      <CenterBtn conteudo={'Outros Generos'} rota={'/generos'} />
    </>
  );
}
