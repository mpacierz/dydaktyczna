import "./LoginPage.css";
import React, { useState } from "react";
import axios from "../../axios";
import { Link, Route, Routes } from 'react-router-dom';

export default function StartPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const login = async e => {

        const response = await axios.get(`/users.json`)

        console.log(response.data);
    }


    return (

                <section className="login-page">
                    <section className="login-page-center">

                        <h1>Witamy w serwisie</h1>
                        <br /><Link to={`/logowanie`}>Zaloguj się</Link><br /><br />
                        <br /><Link to={`/rejestracja`}>Załóż konto</Link><br /><br />


                    </section>
                </section>

    );
}