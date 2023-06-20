import { useState } from 'react';
import Register from '../register';
import Singin from '../signin';
import styles from './login.module.scss';
function Login({ onHandleClick, showSign, showRegis }) {
    return (
        <div className={styles.overlay}>
            {showSign && <Singin onClickHidden={onHandleClick} />}
            {showRegis && <Register onClickHidden={onHandleClick} />}

            {/* {showRegis && <Register onClickAppearSign={clickShowRegister} />} */}
        </div>
    );
}

export default Login;
