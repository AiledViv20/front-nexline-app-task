import styled from './Button.module.scss';

const Button = ({ action, text }) => {
    return ( 
        <div className={styled.container_password}>
            <button type='button' onClick={action}>{text}</button>
        </div>
    );
}
 
export default Button;