import styles from './register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Register({ onClickHidden }) {
    return (
        <div className={styles.singin}>
            <div className={styles.header}>
                <span>Đăng Ký</span>
                <FontAwesomeIcon onClick={onClickHidden} className={styles.icon} icon={faXmark} />
            </div>

            <form>
                <div className={styles.name}>
                    <label>Họ và tên</label>
                    <input placeholder="Nhập họ và tên" />
                </div>

                <div className={styles.email}>
                    <label>Email</label>

                    <input placeholder="Email" type="text" />
                </div>

                <div className={styles.password}>
                    <label>Mật khẩu</label>
                    <input placeholder="Mật Khẩu" type="password" />
                </div>
            </form>

            <button className={styles.button}>
                <div className={styles.btnlogin}>Tạo tài khoản</div>
            </button>

            <div className={styles.signanotherway}>
                <span className={styles.text}>Hoặc đăng ký bằng</span>

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
                    Bạn đã có tài khoản? <a>Đăng nhập ngay!</a>
                </span>
            </div>
        </div>
    );
}

export default Register;
