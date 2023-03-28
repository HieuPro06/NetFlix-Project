import MoviesRow from './MoviesRow';
import styles from './Contents.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { movies } from './Movies/movies';
import { trendingMovies } from './Movies/trendingMovies';
import { topRatedMovies } from './Movies/topRatedMovies';
import { actionMovies } from './Movies/actionMovies';
import { comedyMovies } from './Movies/comedyMovies';
import { horrorMovies } from './Movies/horrorMovies';
import { useEffect } from 'react';
import { getNetFlixOriginal } from '../store/action/index.js';
import { ImArrowUp } from 'react-icons/im';
import { animateScroll as scroll } from 'react-scroll';
import { useScrollY } from '../hooks';

const Contents = () => {
    const dispatch = useDispatch();
    // const { NetFlixOriginals } = useSelector(state => state.infoMovies);
    const ScrollToTop = () => {
        scroll.scrollToTop();
    }
    useEffect(() => {
        dispatch(getNetFlixOriginal());
    }, [dispatch])

    return (
        <div className={styles.wrapContent}>
            <MoviesRow linkMovies={movies} typeMovies="NetFlix Origin" idSection="NetFlix" />
            <MoviesRow linkMovies={trendingMovies} typeMovies="Trending Movies" idSection="Trending" />
            <MoviesRow linkMovies={topRatedMovies} typeMovies="Top Rated Movies" idSection="TopRated" />
            <MoviesRow linkMovies={actionMovies} typeMovies="Action Movies" idSection="Action" />
            <MoviesRow linkMovies={comedyMovies} typeMovies="Comedy Movies" idSection="Comedy" />
            <MoviesRow linkMovies={horrorMovies} typeMovies="Horror Movies" idSection="Horror" />
            <MoviesRow linkMovies={movies} typeMovies="Romance Movies" idSection="Romance" />
            <MoviesRow linkMovies={movies} typeMovies="Documentaries Movies" idSection="Documentaries" />
            <div className={styles.goToTop} onClick={ScrollToTop}
                style={{
                    visibility: `${useScrollY() > 800 ? 'visible' : 'hidden'}`
                }}
            >
                <ImArrowUp />
            </div>
        </div>
    )
}

export default Contents;