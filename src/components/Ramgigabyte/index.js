import styles from '~/components/SiderBar/sidebar.module.scss';
import style from '~/components/SiderBar/category/category.module.scss';
import rams from '~/assets/ramgigabyte';
import Categorys from '~/components/SiderBar/category';
function RamGigabyte() {
    return (
        <div className={styles.categorys}>
            {rams.map((ram) => (
                <Categorys product={ram} />
            ))}
        </div>
    );
}

export default RamGigabyte;
