import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext({});

const CatProv = ({ children }) => {

    const [ gen, setGen ] = useState('');
    const [ info, setInfo ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ pagination, setPagination ] = useState('1');

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzU3MzJlZGU4ZGViZjEwNDViYTBmYjU4Y2E2MDMzYiIsInN1YiI6IjYxNzc5MmU2NjVlMGEyMDA2MjdiZTQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAwrU3hzVvXNI976JOB7NLX4Kny62KVoWItD-L-MISw"
    const baseUrl = "https://api.themoviedb.org/3/discover/movie?";
    const params = `with_genres=${gen}&page=${pagination}`;
    
    useEffect(() => {
        const Dados = async () => {
            try {
                const response = await axios.get(`${baseUrl}${params}`, {
                    headers: {Authorization: `Bearer ${token}`}
                });
                setInfo(response.data);
                setLoading(false);
            } catch (error) {
                console.log('erro', error)
            }
        };
        Dados();
    },[params]);

    const conteudo = info?.results || [];

    return (
        <>
            <CategoryContext.Provider value={{ conteudo, loading, setGen, setPagination }}>
                {children}
            </CategoryContext.Provider>
        </>
    )
};

export const UseCategory = () => {
    return useContext(CategoryContext);
};

export default CatProv;