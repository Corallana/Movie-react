import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h4>No film reel
                <img src="1.png" alt="" />
                </h4>
            )}
        </div>
    );
}

export {Movies};