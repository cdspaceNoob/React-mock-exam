import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon'
import CartContext from '../context/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const cartContext = useContext(CartContext);

    // useEffect에 적절한 의존성을 넣기 위해 disctruct.
    // Alias는 쓰지 않았다. 
    const { items } = cartContext;

    const numberOfCartItems = items.reduce((current, item) => {
        return (current + item.amount);
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return (() => {
            clearTimeout(timer);
        });
    }, [items]);

    return (
        // 버튼 안에는 아이콘과 텍스트를 넣을 것이다. 
        <button className={btnClasses} onClick={props.onClick}>
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