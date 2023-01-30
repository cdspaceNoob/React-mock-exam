import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* spread 연산자를 사용하면 해당 객체의 내용을 전부 가져온다.
            그중 속성과 일치하는 프로퍼티가 있으면 자동으로 맵핑된다. */}
            <input {...props.input} />
        </div>
    )
};

export default Input;