import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpeg';

import classes from './Header.module.css';


// 하나의 블록으로 구성할 것이다.(두 개가 있지만.)
// 1.ToolBar 2.헤더 아래의 Image => 하지만 하나로 할 것이다.
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>

            {/* div에는 image를 넣고 싶다. */}
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Delicious Food For Everyone' />
            </div>
        </Fragment>
    );
};

export default Header;