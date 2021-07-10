import { useEffect, useState } from 'react';
import API from '../API';

//helpers
import { isPersistedState } from '../helpers';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true); //fetch movie data
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchMovie = async () => {
            try{

                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                //Get directors only
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);


            }catch(error){
                setError(true);
            }
        };
        
        const sessionState = isPersistedState(movieId); //movie stored into session stage using its movie id

        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();
    },[movieId])

    //write sessionstorage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state])

    return { state, loading, error };
};