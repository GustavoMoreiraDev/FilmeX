"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import GenerosProvider from "./generosContext";

export const FilmeX = createContext({});

function FilmexProvider({ children }) {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  const key = "735732ede8debf1045ba0fb58ca6033b";
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzU3MzJlZGU4ZGViZjEwNDViYTBmYjU4Y2E2MDMzYiIsInN1YiI6IjYxNzc5MmU2NjVlMGEyMDA2MjdiZTQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAwrU3hzVvXNI976JOB7NLX4Kny62KVoWItD-L-MISw";

  useEffect(() => {
    const Dados = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=pt-BR`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setContent(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error, "erro ao consumir a API");
      }
    };
    Dados();
  }, []);

  return (
    <FilmeX.Provider value={{ content, loading }}>
      <GenerosProvider>{children}</GenerosProvider>
    </FilmeX.Provider>
  );
}

export const UseFilmeX = () => {
  const { content, loading } = useContext(FilmeX);
  const dados = content?.results || [];
  return { dados, loading };
};

export default FilmexProvider;
