"use client";

import HomePage from "@/components/home";
import { CenterBtn } from "@/components/custom/btns";

export default function Home() {

  return (
    <>
      <HomePage />
      <CenterBtn conteudo={'Outros Generos'} rota={'/generos'} />
    </>
  );
}
