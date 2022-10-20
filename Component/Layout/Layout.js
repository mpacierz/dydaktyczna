import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import LoginPage from "../Login/LoginPage";
import RegisterPage from "../Login/RegisterPage";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./Layout.css"
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';



export default function Layout(props) {

    return (<>
        {<>
            <Header setAuth={props.setAuth} auth={props.auth}/>
            <Main auth={props.auth} userId={props.userId} mail={props.mail}/>
            <Footer />
        </>}
    </>)
}