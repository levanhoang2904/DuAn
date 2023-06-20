import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './categorysale.module.scss';
import { useEffect, useState } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Categorysale() {
    const categorysale = [
        {
            url: 'https://static.gigabyte.com/StaticFile/Image/Global/01e0c731b541d1cf479002872204037c/Product/29373/Png',
            title: 'NVIDIA T400 (rev. 1.0) Thư viện ảnh | Professional Graphics Card - GIGABYTE Vietnam',
            price: 2000000,
            pricesale: 10000,
        },

        {
            url: 'https://www.gigabyte.com/FileUpload/Global/KeyFeature/2085/innergigabyteimages/mainpage.png',
            title: 'AORUS RGB Memory DDR5 6000MT/s 32GB Memory Kit, XMP 3.0, Supports AORUS Memory Boost and RGB Fusion 2.0, Selected High Quality Memory ICs, INTEL Z690 certified.',
            price: '4.000.000 đ',
            pricesale: '3.500.000 đ',
        },

        {
            url: 'https://www.sieuthimaychu.vn/datafiles/setone/16336613304391.png',
            title: 'Bộ Nhớ RAM Kingston 16GB 2666MHz DDR4 KVR26N19S8/16',
            price: '2.000.000 đ',
            pricesale: '1.911.000 đ',
        },
        {
            url: 'https://www.pny.com/productimages/786342EC-D6FE-4D2B-9BAF-AF1600C0648E/images/prev_nvidia-rtx-6000-3qtr-top-left.png',
            title: 'NVIDIA T400 (rev. 1.0) Thư viện ảnh | Professional Graphics Card - GIGABYTE Vietnam',
            price: 2000000,
            pricesale: 10000,
        },
    ];

    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(1);
    const [animate, setAnimate] = useState(false);
    const increase = () => {
        if (count == categorysale.length - 1) {
            setCount(1);
            setIndex(0);
        } else {
            setIndex(index + 1);
            setCount(count + 1);
        }

        setAnimate(true);
    };

    return (
        <div className={styles.categorysales}>
            <div className={styles.title}>Sản phẩm giảm giá</div>
            <div className={styles.container}>
                <TransitionGroup className={styles.container}>
                    <CSSTransition key={index} classNames={styles.hidden} timeout={3000}>
                        <div className={styles.categorysale}>
                            <img src={categorysale[index].url} />
                            <div className={styles.text}>{categorysale[index].title}</div>
                        </div>
                    </CSSTransition>

                    <CSSTransition key={count} classNames={styles.hidden}>
                        <div className={styles.categorysale}>
                            <img src={categorysale[count].url} />
                            <div className={styles.text}>{categorysale[count].title}</div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>

                <FontAwesomeIcon onClick={increase} className={styles.icon} icon={faChevronRight} />
            </div>
        </div>
    );
}

export default Categorysale;
