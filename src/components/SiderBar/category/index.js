import styles from './category.module.scss';

import { Link } from 'react-router-dom';
import products from '~/assets/card';

function Categorys({ product }) {

    const price = product.price.toString()// đưa price về string
    const pricesale = product.pricesale.toString()
    console.log(product.imagecategory)
    
    return (
        <Link
            onClick={() => {
                window.scroll({ top: 0 });
                
            }}
            to={`/products/${encodeURIComponent(product.title)}/${product.price}/${product.pricesale}/${1}/${product.id}`} // encodeURIComponent(product.title) mã hóa
            className={styles.category}
            key={product.id}
        >
            <img className={styles.img} src={'~/assets/img/' + product.imagecategory} alt="" />

            
            <div className={styles.info}>{product.title}</div>
            <div className={styles.prices}>
                <div className={styles.price}>
                    <span>{price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>  {/*định dạng dấu . */}
                </div>
                <div className={styles.pricesale}>
                    <span>{pricesale.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                </div>
            </div>
            <div className={styles.discount}>
                <span>20% Giảm</span>
            </div>
        </Link>
    );
}

export default Categorys;
