import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css';

const MealItem = (props) => {
    // toFixed()는 소수점 아래 몇 자리까지 표시할 것인지 정할 수 있게 해준다.
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <div>
                <MealItemForm />
            </div>
        </li>
    );
};

export default MealItem;
