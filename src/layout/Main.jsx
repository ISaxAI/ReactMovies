import {Movies} from "../components/Movies";
import React from "react";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";
import {type} from "@testing-library/user-event/dist/type";
const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,

    }


    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix")
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (searchValue, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search,loading: false}))
    }

    render() {
        const {movies, loading} = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies}/>
                {loading ? <Preloader/> : <Movies movies={movies}/>}
            </main>
        );
    }
}

export {Main}