import styles from './MoviesDetails.module.scss';
import { MdCancel } from 'react-icons/md';
import { BsDownload } from 'react-icons/bs';
import { BiCameraMovie } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import clsx from 'clsx';
const MoviesDetails = () => {
    const dispatch = useDispatch();
    /* Xử lý banner */
    const enableContent = useSelector(state => state.enable);
    /* Xử lý video */
    const isOpenVideo = useSelector(state => state.video);
    return (
        <div className={styles.details} style={enableContent ? { display: 'block' } : { display: 'none' }}>
            <div className={styles.backdrop} onClick={() => dispatch({ "type": "hide" })}></div>
            <div className={clsx(styles.modal, {
                [styles.show]: enableContent === true,
                [styles.hide]: enableContent === false,
            })}
                style={{
                    backgroundImage: `url(http://image.tmdb.org/t/p/w500${localStorage.getItem("background")})`,
                    backgroundSize: 'cover',
                    objectFit: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className={clsx(styles.container)} >
                    <div className={styles.movieInfo}>
                        <h1 className={styles.movieName}>{localStorage.getItem("name")}</h1>
                        <div className={styles.statistical}>
                            <span className={styles.movieRate}>Rating {localStorage.getItem("rating")}</span>
                            <span className={styles.moviePopular}>Popularity : {localStorage.getItem("popularity")}</span>
                        </div>
                        <p className={styles.releaseDay}>Release Date : {localStorage.getItem("releaseDate")}</p>
                        <p className={styles.runTime}>Runtime : 2 hour</p>
                        <p className={styles.overView}>
                            {localStorage.getItem("info")}
                        </p>
                    </div>
                </div>
                <span className={styles.exit} onClick={() => dispatch({ "type": "hide" })}>
                    <MdCancel />
                </span>
                <div className={styles.btn}>
                    <div className={styles.downloadMovies}>
                        <BsDownload className={styles.icon} />
                        Tải phim
                    </div>
                    <div className={styles.TrailerReview} onClick={() => dispatch({ type: "open" })}>
                        <BiCameraMovie className={styles.icon} />
                        Xem Trailer
                    </div>
                </div>
                <div className={styles.trailerVideo} style={
                    isOpenVideo ? { display: "block" } : { display: "none" }
                }>
                    <ReactPlayer
                        playing={false}
                        url="https://www.youtube.com/watch?v=9VsCq3_6i88"
                        controls={true}
                        width="1000px"
                        height="500px"
                    />
                    <span className={styles.cancel} onClick={() => dispatch({ "type": "close" })}>
                        <MdCancel />
                    </span>
                </div>
            </div>
        </div>
    )
}
export default MoviesDetails;