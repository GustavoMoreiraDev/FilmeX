"use client";

import { UseCategory } from "@/context/category";

// import CatProv from "@/context/category";

import Search from "@/components/search";
import Carrousel from "@/components/home/carrousel";
import Cards from "@/components/home/cards";
import Ficcao from "@/components/home/ficcao";
import Aventura from "@/components/home/aventura";
// import CatList from "@/components/catList";


export default function Home() {

  return (
    <>
      <Search />
      <Carrousel />
      <Cards />
      <Ficcao />
      <Aventura />
    </>
  );
}
