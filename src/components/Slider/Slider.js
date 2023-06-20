import styles from './slider.module.scss';

import images from '../images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Show from './Show';

function Slider() {
    const [imgState, setImgState] = useState(0);
    const handleNext = () => {
        if (imgState == images.length - 1) setImgState(0);
        else setImgState(imgState + 1);
    };

    const handlePrev = () => {
        if (imgState == 0) setImgState(images.length - 1);
        else setImgState(imgState - 1);
    };

    useEffect(() => {
        const timeout = setTimeout(handleNext, 2000);

        return () => clearTimeout(timeout);
    }, [imgState]);

    return (
        <div className={styles.slider}>
            <Show url={images[imgState].image} />

            <FontAwesomeIcon onClick={handlePrev} className={`${styles.left} ${styles.icon}`} icon={faAngleLeft} />
            <FontAwesomeIcon onClick={handleNext} className={`${styles.right} ${styles.icon}`} icon={faAngleRight} />
        </div>
    );
}

export default Slider;
