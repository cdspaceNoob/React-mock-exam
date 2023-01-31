// 장바구니 창. 모달로 구현한다.
import { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../context/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = () => { };

    const cartItemAddHandler = () => { };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartContext.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}    // bind는 item.id를 전달한다. 
                    onAdd={cartItemAddHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>
                    close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
