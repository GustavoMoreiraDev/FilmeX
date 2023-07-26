import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';

export const Generos = createContext({});

function GenerosProvider ({ children }) {

    const [ genres, setGenres ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const key = "735732ede8debf1045ba0fb58ca6033b";
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzU3MzJlZGU4ZGViZjEwNDViYTBmYjU4Y2E2MDMzYiIsInN1YiI6IjYxNzc5MmU2NjVlMGEyMDA2MjdiZTQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAwrU3hzVvXNI976JOB7NLX4Kny62KVoWItD-L-MISw";
  

    useEffect(() => {
        const Dados = async () => {
            try {
          
              const genresResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=pt-BR`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
              setGenres(genresResponse.data.genres);
              setLoading(false);
            } catch (error) {
              console.log(error, 'erro ao consumir a API');
            }
        };
        Dados();
    },[])

    return (
        <Generos.Provider value={{ genres, loading}}>
            {children}
        </Generos.Provider>
    )
};

export default GenerosProvider;