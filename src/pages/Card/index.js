import styles from './card.module.scss';
import card from '~/assets/card';
import Categorys from '~/components/SiderBar/category';
function Card() {
    return (
        <div className={styles.categorys}>
            {card.map((product) => (
                <Categorys product={product} />
            ))}
        </div>
    );
}

export default Card;
