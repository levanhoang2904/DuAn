import styles from '~/pages/Card/card.module.scss';

import style from '~/components/SiderBar/category/category.module.scss';
import rams from '~/assets/ramkingston';
import Categorys from '~/components/SiderBar/category';
function RamKingston() {
    return (
        <div className={styles.categorys}>
            {rams.map((ram) => (
                <Categorys product={ram} />
            ))}
        </div>
    );
}

export default RamKingston;
