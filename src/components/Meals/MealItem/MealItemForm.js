import { useRef, useState } from 'react';

import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState();
    const amountInputRef = useRef();

    // submit되면 장바구니에 아이템이 추가되어야 한다. 
    const submitHandler = event => {
        // submit 시 일어나는 Request를 막는다. 
        event.preventDefault();

        // ref로 값을 받아온다. (Ref.current.value는 항상 String이다.)
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        // 수량이 올바르게 입력되었는지를 검증한다.
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        // 올바르게 입력되었다면 장바구니에 정보를 담는 함수를 실행한다.
        // 이 컴포넌트 내에는 장바구니에 들어갈 아이템의 정보가 불충분하므로(수량만 가지고 있다.),
        // 충분한 정보를 가지고 있는 컴포넌트에서 기능을 실행하도록 포인터를 지정해준다.(아이템 이름, 설명 등.) 
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                label='amount'
                ref={amountInputRef}
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} />
            <button>+Add</button>
            {!amountIsValid && <p>Please enter a valid amount.(1-5)</p>}
        </form>
    );
};

export default MealItemForm;