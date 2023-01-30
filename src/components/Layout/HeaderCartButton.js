import { useContext } from 'react';

import Header from './Header';

import CartIcon from '../Cart/CartIcon'
import CartContext from '../context/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    return (
        // 버튼 안에는 아이콘과 텍스트를 넣을 것이다. 
        <button className={classes.button} onClick={props.onClick}>
            {/* 아이콘부터 */}
            <span className={classes.icon}>
                <CartIcon />
            </span>

            <span>Your Cart</span>

            {/* 현재 장바구니에 있는 아이템의 개수 */}
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;