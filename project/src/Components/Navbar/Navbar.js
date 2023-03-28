import NetFlixlogo from '../../assets/images/Logonetflix.png';
import { BsSearch } from 'react-icons/bs';
import styles from './Navbar.module.scss';
import { useRef } from 'react';
import { useScrollY } from '../hooks';
const Navbar = () => {
    /* Xử lý logic của thanh search */
    const inputRef = useRef();
    const handleClick = () => {
        Object.assign(inputRef.current.style, {
            width: '250px',
            border: '1px solid #222'
        })
    }
    const handleBlur = () => {
        Object.assign(inputRef.current.style, {
            width: '0px',
            border: 'none'
        })
    }
    /* Xử lý scroll Navbar */
    return (
        <div className={styles.navbar} style={useScrollY() < 50 ?
            { backgroundColor: 'transparent' } : { backgroundColor: 'rgb(17,17,17)', boxShadow: '0 0 8px 0 #333' }
        }>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <a href="http://localhost:3000/">
                        <img src={NetFlixlogo} alt="NetFlix Logo" className={styles.image} width="" />
                    </a>
                </div>
                <div className={styles.search} onBlur={handleBlur}>
                    <BsSearch className={styles.searchIcon} onClick={handleClick} />
                    <input ref={inputRef} type="text" className={styles.searchInput} placeholder="Input title , genres , people" />
                </div>
            </div>
            <div className={styles.fadeBottom}></div>
        </div>
    )
}

export default Navbar;