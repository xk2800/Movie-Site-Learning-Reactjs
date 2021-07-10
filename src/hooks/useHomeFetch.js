import { useState, useEffect } from 'react';

//API
import API from '../API';

//used to reset stuff
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {

    const [searchTerm, setSearchTerm] = useState(''); //used for search
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false); //loading state
    const [error, setError] = useState(false); //for errors
    const [isLoadingMore, setIsLoadingMore] = useState(false); //when fetching more data

    console.log(searchTerm);

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

    //initial and search...search term and initial mount can use same useEffect bcs on search & 1st mount, both only need 1st page data
    useEffect(() => {
        setState(initialState); //reset old state before making new search
        fetchMovies(1, searchTerm); //1 is because just want to fetch 1st page

    },[searchTerm]/*Dependency array for useEffect. if empty array then it will only run once*/) //searchTerm will trigger this useEffect each time searchTerm changes & trigger once on mount

    //Load more
    useEffect(() => {
        if(!isLoadingMore) return; //this useEffect won't trigger if no extra loading(more)

        fetchMovies(state.page + 1, searchTerm); //+1 bcs want to load another page. searchTerm added in case its used in search term
        setIsLoadingMore(false); //to return to initial state

    },[isLoadingMore, searchTerm, state.page] /*this only triggers when isLoadingMore is changing*/)

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
