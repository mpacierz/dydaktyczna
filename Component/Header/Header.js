import React from "react";
import "./Header.css"
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Header(props) {

    const navigate = useNavigate();

    const logout = () => {
        window.localStorage.removeItem("token-data");
        window.localStorage.removeItem("user-id");
        props.setAuth(false);
        navigate("/");
    }

    return (<>
        <header>
            <section className="main-header">
                Wydział Informatyki - Strona Dydaktyczna
            </section>

            <section className="right-header">

                {
                    props.auth == false ? <>
                        <Link to={"/logowanie"} className="link-header">Zaloguj</Link> 
                    </> : <>
                        <button><Link to={"/profil"} className="link-header">Profil</Link></button>
                        <button onClick={logout}>Wyloguj</button>
                    </>
                }

            </section>

        </header>
    </>)
}