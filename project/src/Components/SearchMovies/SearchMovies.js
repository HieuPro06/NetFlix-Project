import styles from './SearchMovies.module.scss';
import { actionMovies } from '../Contents/Movies/actionMovies.js';
import clsx from 'clsx';
const SearchMovies = () => {
    const movieList = actionMovies;
    return (
        <div className={styles.searchWrap}>
            <div className={styles.searchMoviesList}>
                {
                    movieList && movieList.length > 0 ?
                        (movieList.map((movie, index) => (
                            <div className={clsx(styles.searchMoviesItem, styles[`item${index + 1}`])} key={index}>
                                <img className={styles.img} src={movie} alt="" />
                                <span className={styles.searchMoviesName}>Neymar Hair</span>
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