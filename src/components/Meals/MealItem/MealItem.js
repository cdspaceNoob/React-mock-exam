import { useContext } from 'react';
import MealItemForm from './MealItemForm';

import CartContext from '../../context/cart-context';
import classes from './MealItem.module.css';


const MealItem = (props) => {
    const cartContext = useContext(CartContext);

    // toFixed()는 소수점 아래 몇 자리까지 표시할 것인지 정할 수 있게 해준다.
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
