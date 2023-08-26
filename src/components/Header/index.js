import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import Login from '../login';
import Logo from '~/assets/img/Logo.png';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { name } from '../signin';
import { lengthContext } from '~/context/LengthCart';
function Header({ onHandleClick, onClickAppearSign, onClickAppearRegis, onChangActive, activelog}) {
   
    const value = useContext(lengthContext)
    
    // value.getcart()
    const appearSign = () => {
        onHandleClick();
        onClickAppearSign();
    };

    const appearRegis = () => {
        onHandleClick();
        onClickAppearRegis();
    };

    // const [active, setActive] = useState(true);

    const logout = () => {
        value.resetLength()
        onChangActive();
    };

    // const logged = () => {
    //     setActive(!active);
    // };
    const [key, setKey] = useState("")
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={Logo} alt='' />
                </Link>
            </div>
            <div className={styles.right}>
                <div className={styles.search}>
                    <label>Nhập để tìm kiếm</label>
                    <div className={styles.input}>
                        <form action = {`/search/${key}`} >
                        <input placeholder="Nhập để tìm kiếm" name = 'key' onChange={(e) => {setKey(e.target.value); console.log(key)}} />
                        </form>
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
                    <Link to="/carts" className={styles.cart}>
                        <FontAwesomeIcon className={styles.iconCart} icon={faCartShopping} />
                        <div className={styles.ammount}>{value.length}</div>
                    </Link>

                    <div className={styles.account}>
                        {activelog ? (
                            <div className={styles.loginactive}>
                                <FontAwesomeIcon icon={faUser} />
                                <div className={styles.name}>{name}</div>
                                <button onClick={logout} className={styles.logout}>
                                    Đăng xuất
                                </button>
                            </div>
                        ) : (
                            <div className={styles.login}>
                                <div className={styles.signin}>
                                    <button onClick={appearSign}>Đăng nhập</button>
                                </div>
                                <div className={styles.register}>
                                    <button onClick={appearRegis}>Đăng ký</button>
                                </div>
                            </div>
                        )}

                        {/* <div className={styles.loginactive}>
                            <FontAwesomeIcon icon={faUser} />
                            <div className={styles.name}>Văn Hoàng</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
 
