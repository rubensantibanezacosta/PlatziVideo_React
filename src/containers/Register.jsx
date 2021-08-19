import React, {useState} from "react";
import {connect} from "react-redux";
import { registerRequest } from "../actions";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss"

const Register = props => {
    const [form, setValues] = useState({
        email:"",
        name:"",
        password:"",
    });

    const handleInput = event =>{
        setValues({
            ...form,
            [event.target.name]:event.target.value,
        })
    };

    const handleSubmit = event =>{
        event.preventDefault();
        props.registerRequest(form);
        props.history.push("/");
        
    }
    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form autoComplete="off" className="register__container--form" onSubmit={handleSubmit}>

                    <input 
                    className="register__input" 
                    type="text" 
                    placeholder="Nombre"
                    name="name"
                    onChange={handleInput}
                    />

                    <input 
                    className="register__input" 
                    type="email" 
                    placeholder="Correo"
                    name="email"
                    onChange={handleInput}
                    />

                    <input 
                    className="register__input" 
                    type="password" 
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleInput} 
                    />

                    <button className="register__button">Registrarme</button>
                </form>
                <Link to="/Login">Iniciar sesión</Link>

            </section>
        </section>
    )
};

const mapDispatchToProps = {
registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);