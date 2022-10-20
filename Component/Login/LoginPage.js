import "./LoginPage.css";
import React, { useState } from "react";
import axios from "../../axios";
import RegisterPage from "../Login/RegisterPage";
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function LoginPage(props) {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = async e => {

        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrXJjAMcetHabtFFBE-sHihp0bty0z9Ww`, {
                email: email,
                password: password,
                returnSecureToken: true,
            });
            props.setAuth(true);
            props.setMail(JSON.stringify(response.data.email));
            props.setUserId(JSON.stringify(response.data.localId));
            window.localStorage.setItem('token-data', JSON.stringify(response.data.idToken));
            window.localStorage.setItem('user-id', (response.data.localId)); 
            navigate("/");
        } catch (ex) {
            setError(ex.response.data.error.message);
            console.log(ex.response);
        }
    }

    return (

        <section className="login-page">


            <section className="login-page-center">

                <h1>Logowanie do serwisu</h1>
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

                <button onClick={login}>Zaloguj</button><br /> <br />

                {error ? (<>
                    <section className="error">{error}</section><br />
                </>
                ) : null}

            </section>


        </section>


    );
}