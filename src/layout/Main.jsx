import {Movies} from "../components/Movies";
import React, {useEffect, useState} from "react";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";
import {type} from "@testing-library/user-event/dist/type";
const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
            })
            .catch((err)=>{
                console.error(err)
                setLoading(false)
            })
    }, []);



    const searchMovies = (searchValue, type = 'all') => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
            })
    }
        return (
            <main className='container content'>
                <Search searchMovies={searchMovies}/>
                {loading ? <Preloader/> : <Movies movies={movies}/>}
            </main>
        );
}

export {Main}