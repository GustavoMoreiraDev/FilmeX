'use client';

import Search from "@/components/search";
import Carrousel from "@/components/home/carrousel";
import Cards from "@/components/home/cards";
import Ficcao from "@/components/home/ficcao";

export default function Home() {
  return (
    <>
      <Search />
      <Carrousel />
      <Cards />
      <Ficcao />
    </>
  )
};
