import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './signin.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Singin({ onClickHidden }) {
    return (
        <div className={styles.singin}>
            <div className={styles.header}>
                <span>Đăng nhập</span>
                <FontAwesomeIcon onClick={onClickHidden} className={styles.icon} icon={faXmark} />
            </div>

            <form>
                <div className={styles.email}>
                    <label>Email</label>

                    <input placeholder="Email" type="text" />
                </div>

                <div className={styles.password}>
                    <label>Mật khẩu</label>
                    <input placeholder="Mật Khẩu" type="password" />
                </div>
            </form>
            <span className={styles.forgotpas}>Quên Mật Khẩu?</span>

            <button className={styles.button}>
                <div className={styles.btnlogin}>Đăng nhập</div>
            </button>

            <div className={styles.signanotherway}>
                <span className={styles.text}>Hoặc đăng nhập bằng</span>

                <div className={styles.btnsigin}>
                    <button className={`${styles.google} ${styles.btn}`}>
                        <FontAwesomeIcon className={styles.icon} icon={faGoogle} />
                        google
                    </button>
                    <button className={`${styles.facebook} ${styles.btn}`}>
                        <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                        facebook
                    </button>
                </div>
            </div>

            <div className={styles.register}>
                <span>
                    Bạn chưa có tài khoản? <a>Đăng ký ngay!</a>
                </span>
            </div>
        </div>
    );
}

export default Singin;
