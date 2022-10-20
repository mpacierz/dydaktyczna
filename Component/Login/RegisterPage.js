import "./LoginPage.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Register(props) {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const register = async e => {

        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrXJjAMcetHabtFFBE-sHihp0bty0z9Ww`, {
                email: email,
                password: password,
                returnSecureToken: true
            });
            props.setAuth(true);
            window.localStorage.setItem('token-data', JSON.stringify(response.data.idToken));
            navigate("/start");
        } catch (ex) {
            setError(ex.response.data.error.message);
        }

    }

    return (
        <section className="login-page">
            <section className="login-page-center">

                <h1>Rejestracja</h1>

                <input
                    type="text"
                    className="login-button"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />Email<br /><br />

                <input
                    type="password"
                    className="login-button"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />Hasło<br /><br />

                <button onClick={register}>Załóż konto</button><br /> <br />

                {error ? (<>
                    <section className="error">{error}</section><br />
                </>
                ) : null}

                <Link to={`/`}>Zaloguj się</Link><br />
            </section>
        </section>
    );
}