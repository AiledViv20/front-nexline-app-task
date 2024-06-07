import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import { FaRegUser, FaRegEnvelope, FaKey } from "react-icons/fa6";
import styled from './Register.module.scss';
import Button from '../../components/Button';

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChangeValues = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    
    const submitData = () => {
        if (data.firstname !== "" && data.lastname !== "" && data.email !== "" && data.password !== "" && data.confirmPassword !== "") {
            toast.success("Se ha creado la cuenta correctamente", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } else {
            toast.error("¡Algo salió mal!", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }

    return ( 
        <div className={styled.container_register}>
            <div className={styled.col_1}></div>
            <div className={styled.col_2}>
                <div className={styled.form}>
                    <h1>Registro</h1>
                    <Input 
                        name={"firstname"}
                        value={data.firstname}
                        action={handleChangeValues}
                        placeholder={"Nombre"}
                        icon={FaRegUser} />
                    <Input 
                        name={"lastname"}
                        value={data.lastname}
                        action={handleChangeValues}
                        placeholder={"Apellido"}
                        icon={FaRegUser} />
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
                    <Input 
                        type={"password"}
                        name={"confirmPassword"}
                        value={data.confirmPassword}
                        action={handleChangeValues}
                        placeholder={"Confirmar contraseña"}
                        icon={FaKey} />
                    <Button 
                        action={submitData}
                        text={"Crear cuenta"}/>
                    <p>¿Ya tienes una cuenta? <a href='/'>Iniciar sesión</a></p>
                </div>
            </div>
        </div>
    );
}
 
export default Register;