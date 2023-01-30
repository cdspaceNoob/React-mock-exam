// 장바구니 창. 모달로 구현한다. 
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul>{
        [
            { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
        ].map((item) => (item.name))
    }</ul>;
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;