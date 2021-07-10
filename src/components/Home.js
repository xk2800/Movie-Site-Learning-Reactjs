//config
import { useState, useEffect } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//API
import API from '../API';

//components


//hooks


//image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => { //page = gets page, searchTerm = input from user
        
        try{
            setError(false); //to ensure there is no error
            setLoading(true); //allow loading state to show when data is being fetched from API

            const movies = await API.fetchMovies(searchTerm, page); //holds all movies
            //console.log(movies);

            setState(previous => ({
                ...movies,  //using ES6(spread). take all properties from object and spread into this object
                results:
                    page > 1 ? [...previous.results, ...movies.results] /*used to append new movies to old state, new ...movies append to ...previous*/ : [...movies.results]
            }));

        }catch(error){
            setError(true); //to allow error message to be shown
        }
        setLoading(false); //to stop loading state
    };

    //initial render
    useEffect(() => {
        fetchMovies(1); //1 is because just want to fetch 1st page


    },[]/*Dependency array for useEffect. if empty array then it will only run once*/)

    console.log(state);


    return <div>Home Page</div>
}

export default Home;