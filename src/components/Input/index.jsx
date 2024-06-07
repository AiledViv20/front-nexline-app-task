import styled from './Input.module.scss';

const Input = ({ type = "text", name, value, action, placeholder, icon: Icon }) => {

    return ( 
        <div className={styled.container_input}>
            {Icon && <Icon className={styled.icon} />}
            <input type={type} name={name} value={value} onChange={action} placeholder={placeholder} />
        </div>
    );
}
 
export default Input;