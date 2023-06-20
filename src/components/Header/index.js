import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Login from '../login';
import { useState } from 'react';
function Header({ onHandleClick, onClickAppearSign, onClickAppearRegis }) {
    const appearSign = () => {
        onHandleClick();
        onClickAppearSign();
    };

    const appearRegis = () => {
        onHandleClick();
        onClickAppearRegis();
    };
    return (
        <div className={styles.header}>
            <div className={styles.login}></div>
            <div className={styles.right}>
                <div className={styles.search}>
                    <label>Nhập để tìm kiếm</label>
                    <div className={styles.input}>
                        <input placeholder="Nhập để tìm kiếm" />
                        <div className={styles.searchsuggest}>
                            <li>Card đồ họa nvidia</li>
                            <li>Card đồ họa nvidia</li>
                            <li>Card đồ họa nvidia</li>
                            <li>Card đồ họa nvidia</li>
                            <li>Card đồ họa nvidia</li>
                            <li>Card đồ họa nvidia</li>
                        </div>
                    </div>
                    <button>
                        <FontAwesomeIcon className={styles.iconsearch} icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={styles.left}>
                    <div className={styles.cart}>
                        <FontAwesomeIcon className={styles.iconCart} icon={faCartShopping} />
                        <p>Giỏ hàng</p>
                    </div>

                    <div className={styles.account}>
                        <div className={styles.login}>
                            <div className={styles.signin}>
                                <button onClick={appearSign}>Đăng nhập</button>
                            </div>
                            <div className={styles.register}>
                                <button onClick={appearRegis}>Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
