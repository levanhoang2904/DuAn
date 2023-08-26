import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './cart.module.scss';
import { faClose, faFaceSadCry } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from 'react';
import products from '~/assets/card';
import { lengthContext } from '~/context/LengthCart';



function Cart() {
    const [amount, setAmount] = useState(1);
    const [cart, setCart] = useState([]);
  
    const context = useContext(lengthContext)
    const increaseAmount = () => {
        setAmount(amount + 1);
    };
    const decreaseAmount = () => {
        if (amount > 1) setAmount(amount - 1);
    };

    useEffect(() => {
        fetch('http://localhost:3000/api/getcart')
            .then((res) => {
                if (res.status === 200) return res.json()
            })

            .then((data) => {
                setCart(data);
                
            });
    }, []);
    

    
    const deleteItem = (id) => {
           try {
            fetch ('http://localhost:3000/api/deleteItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })
                .then ((res) => {
                    if (res.status === 200) return res.json()
                }) 
                .then ((data) => {
                    if (data) {
                        const newCart = cart.filter(product => product.idCart !== id)
                        setCart(newCart)
                        context.decreaseLength()
                    }
                })
        
           } catch (error) {
                console.log(error)
           }
    }
    return (
        <div className={styles.cart}>
            <div className={styles.wrap}>
                {cart.length > 0 ? (
                    <div className={styles.havecart}>
                        {cart.map((product, index) => (
                           
                            <div className={styles.cartlist}>
                                <img
                                    className={styles.imgproduct}
                                    src="https://www.sieuthimaychu.vn/datafiles/setone/15402846823246.jpg" alt = ""
                                />
                                <div className={styles.infoproduct}>
                                    <p>{product.title}</p>
                                </div>
                                <div className={styles.priceproduct}>{(product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</div>
                                <div className={styles.amount}>
                                    <button onClickCapture={increaseAmount}>+</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={decreaseAmount}>-</button>
                                </div>
                                <button onClick={() => {
                                       
                                        deleteItem(product.idCart)
                                    }} className={styles.btnClose}> <FontAwesomeIcon className={styles.iconclose} icon={faClose} /></button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.nocart}>
                        <FontAwesomeIcon className={styles.icon} icon={faFaceSadCry} />
                        <h1>Hiện tại chưa có sản phẩm trong giỏ hàng</h1>
                    </div>
                )}
                {/*  */}
            </div>
        </div>
    );
}

export default Cart;
