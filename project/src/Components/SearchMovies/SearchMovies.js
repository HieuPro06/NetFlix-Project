import styles from './SearchMovies.module.scss';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
const SearchMovies = () => {
    const MovieSearch = useSelector(state => state.movies);
    const movieList = MovieSearch.SearchMovie;
    const infoBanner = useSelector(state => state.data);
    const dispatch = useDispatch();
    const handle = (movie) => {
        dispatch({ "type": "show" });
        dispatch({ type: "up", payload: movie })
    }
    console.log(movieList);
    return (
        <div className={styles.searchWrap}>
            <div className={styles.searchMoviesList}>
                {
                    movieList && movieList.length > 0 ?
                        (movieList.map((movie, index) => (
                            <div
                                className={clsx(styles.searchMoviesItem, styles[`item${index + 1}`])}
                                key={index}
                                onClick={(movie) => {
                                    handle(movie)
                                }}
                            >
                                <img
                                    className={styles.img} style={{ color: 'white' }}
                                    src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}` || `http://image.tmdb.org/t/p/original${movie.poster_path}`}
                                // alt="Hiện tại chúng tôi chưa có ảnh cho bộ phim này"
                                />
                                <span className={styles.searchMoviesName}>{movie.name || movie.title}</span>
                            </div>
                        ))) :
                        (
                            <div className={styles.searchMovieItem}>
                                <h3 className={styles.Nothing}>Your search for 'xxxlxx' did not have any <br /> matches .</h3>
                            </div>
                        )

                }
            </div>
        </div>
    )
}
export default SearchMovies;