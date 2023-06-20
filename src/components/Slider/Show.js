import styles from './show.module.scss';

function Show(images) {
    return (
        <div className={styles.wrap}>
            <img src={images.url} alt={images.alt} className={`${styles.img}`} />
        </div>
    );
}

export default Show;
