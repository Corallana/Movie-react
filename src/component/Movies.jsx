import { Movie } from "./Movie";
import rell from '../1.PNG';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h4>No film reel
                <img src={rell} alt="" />
                </h4>
            )}
        </div>
    );
}

export {Movies};