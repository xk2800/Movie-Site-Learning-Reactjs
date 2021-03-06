import PropTypes from 'prop-types';

//styles
import { Image } from "./Thumb.styles";

import { Link } from 'react-router-dom';

const Thumb =({ image, movieId, clickable}) => (

    <div>
        {clickable ? ( //check if thumbnail is clickable or not
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb' />
            </Link>
        ) : ( 
            <Image src={image} alt='movie-thumb' />
        )}
    </div>
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb;