import Input from "../../form/input"
import { Link } from 'react-router-dom'
import styles from '../../form/form.module.css'
import React, { useState } from 'react';


function Register() {
    const [user, setUser] = useState({})

    function handleChange(e){
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault()
        // enviar o usuario para o banco
        console.log(user)
    }
    return (
        <section className={styles.form_container}>
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite Seu Nome"
                    handleOnChange={handleChange}
                ></Input>

                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite Seu Email"
                    handleOnChange={handleChange}
                ></Input>

                <Input
                    text="senha"
                    type="password"
                    name="password"
                    placeholder="Digite Sua Senha"
                    handleOnChange={handleChange}
                ></Input>
                <Input
                    text="Confirmação Senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Digite Sua Senha Novamente"
                    handleOnChange={handleChange}
                ></Input>

                <Input
                    text="Nome"
                    type="text"
                    name="phone"
                    placeholder="Digite Seu Telfone"
                    handleOnChange={handleChange}
                ></Input>

                <input type="submit" value="Cadastrar"></input>
            </form>
            <p>
                Já tem conta? <Link to="/login">Clique aqui.</Link>
            </p>
        </section>
    )
}

export default Register