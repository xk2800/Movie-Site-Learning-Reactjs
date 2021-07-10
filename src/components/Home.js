//config
import { useState, useEffect } from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//API
import API from '../API';

//components
import HeroImage from './HeroImage';

//hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const{ state, loading, error } = useHomeFetch();

    console.log(state);


    return (
        <>          {/*Fragment */}

            {/* state.results[0] && 
                <HeroImage /> */
            }

            {/* OR */}

            { state.results[0] ?( 
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} //used to get image url from API, takes most popular //THIS IS TEMPLATE LITERAL
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                    //note: backdrop_path, original_title, overview are from API
                /> 
            ): null 
            }

        </>         /*Fragment */
    );
};

export default Home;