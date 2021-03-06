//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//API
//import API from '../API';

//components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

//hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
    ////note: dual setSearchTerm to trigger delay on search

    console.log(state);

    if (error) return <div>Something went wrong...</div>;


    return (
        <>          {/*Fragment */}

            {/* state.results[0] && 
                <HeroImage /> */
            }

            {/* OR */}

            {!searchTerm && state.results[0] ? ( //grabs 1st content from API //!searchTerm used to make heroimage hidden when search is made
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} //used to get image url from API, takes most popular //THIS IS TEMPLATE LITERAL
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                //note: backdrop_path, original_title, overview are from API
                />
            ) : null
            }

            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}> {/*if there's a search, Search Result shown, otherwise is Popular Movies */}
                {state.results.map(movie => (
                    // <div key={movie.id}>{movie.title}</div> //temp output movie title
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner />} {/*this shows spinner if data is loading */}

            {state.page < state.total_pages && !loading && ( //check current page is less than total pages then need load more button, and check no data loading which shows spinner
                <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            )}
        </>         /*Fragment */
    );
};

export default Home;