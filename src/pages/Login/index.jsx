import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import { FaRegEnvelope, FaKey } from "react-icons/fa6";
import styled from './Login.module.scss';
import Button from '../../components/Button';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChangeValues = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    
    const submitData = () => {
        if (data.email !== "" && data.password !== "") {
            navigate('/home');
        } else {
            toast.error("¡Algo salió mal!", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }

    return ( 
        <div className={styled.container_login}>
            <div className={styled.col_1}>
                <div className={styled.form}>
                    <h1>Iniciar sesión</h1>
                    <Input 
                        name={"email"}
                        value={data.email}
                        action={handleChangeValues}
                        placeholder={"Correo electrónico"}
                        icon={FaRegEnvelope} />
                    <Input 
                        type={"password"}
                        name={"password"}
                        value={data.password}
                        action={handleChangeValues}
                        placeholder={"Contraseña"}
                        icon={FaKey} />
                    <Button 
                        action={submitData}
                        text={"Ingresar"}/>
                    <p>¿No tienes una cuenta? <a href='/register'>Crear una</a></p>
                </div>
            </div>
            <div className={styled.col_2}></div>
        </div>
    );
}
 
export default Login;