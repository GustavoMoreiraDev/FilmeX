import { useState, useEffect } from "react";
import axios from "axios";

export const GET_ID = ({ id }) => {
      
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzU3MzJlZGU4ZGViZjEwNDViYTBmYjU4Y2E2MDMzYiIsInN1YiI6IjYxNzc5MmU2NjVlMGEyMDA2MjdiZTQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAwrU3hzVvXNI976JOB7NLX4Kny62KVoWItD-L-MISw";
    const baseUrl = `https://api.themoviedb.org/3/movie/${id}?`;
    const params = `language=pt-br`;

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}${params}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setInfo(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
  }, [baseUrl, params]);

  return { info, loading };
};
