import styles from './category.module.scss';
import nvidiaImage from '~/assets/img/vganvida.png';
import products from '~/assets/card';
function Categorys({ product }) {
    return (
        <div className={styles.category} key={product.id}>
            <img className={styles.img} src={product.imagecategory} />
            <div className={styles.info}>{product.title}</div>
            <div className={styles.prices}>
                <div className={styles.price}>
                    <span>{product.price}</span>
                </div>
                <div className={styles.pricesale}>
                    <span>{product.pricesale}</span>
                </div>
            </div>
            <div className={styles.discount}>
                <span>20% Giảm</span>
            </div>
        </div>
    );
}

export default Categorys;
