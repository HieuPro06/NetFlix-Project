import styles from './MoviesDetails.module.scss';
import { MdCancel } from 'react-icons/md';
import { BsDownload } from 'react-icons/bs';
import { BiCameraMovie } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
const MoviesDetails = () => {
    /* Xử lý banner */
    const enableContent = useSelector(state => state.enable);
    const dispatch = useDispatch();
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
                    backgroundImage: `url(https://i.pinimg.com/originals/32/f6/48/32f6482ca5c98ccd947a9c2cdaefdb08.png)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className={clsx(styles.container)} >
                    <div className={styles.movieInfo}>
                        <h1 className={styles.movieName}>Band</h1>
                        <div className={styles.statistical}>
                            <span className={styles.movieRate}>Rating 82%</span>
                            <span className={styles.moviePopular}>Popularity : 123.456</span>
                        </div>
                        <p className={styles.releaseDay}>Release Date : 21/03/2023</p>
                        <p className={styles.runTime}>Runtime : 2 hour</p>
                        <p className={styles.overView}>
                            Việc tìm kiếm một tiền đạo đẳng cấp trong mùa Hè là yêu cầu cấp thiết của Man United. Harry Kane, Victor Osimhen và Goncalo Ramos là những mục tiêu đã được chỉ ra cho Quỷ đỏ thành Manchester.
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
                    <iframe
                        src="https://www.youtube.com/embed/RK1K2bCg4J8"
                        frameborder="0"
                        width="1000"
                        height="500"
                    >
                    </iframe>
                    <span className={styles.cancel} onClick={() => dispatch({ "type": "close" })}>
                        <MdCancel />
                    </span>
                </div>
            </div>
        </div>
    )
}
export default MoviesDetails;