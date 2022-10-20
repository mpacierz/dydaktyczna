import React from "react";
import { Component } from "react";
import "./Main.css";
import { Route, Routes } from 'react-router-dom';
import StartPage from "./StartPage/StartPage";
import ProfilPage from "../User/ProfilPage/ProfilPage";
import NavLeftBar from "./NavLeftBar/NavLeftBar";
import LoginPage from "../Login/LoginPage";
import AddCourse from "../User/TeacherSection/AddCourse/AddCourse";
import MyCourse from "../User/TeacherSection/MyCourse/MyCourse";
import EditCourse from "../User/TeacherSection/MyCourse/EditCourse";
import TeachersPage from "../User/TeachersPage/AllTeachers/TeachersPage";
import TeacherPage from "../User/TeachersPage/Teacher/TeacherPage";
import Course from "../User/TeachersPage/Course/Course";
import MyInformation from "../User/TeacherSection/Messages/MyInformation";


function Main(props) {

    return (

        <main>
            <nav className="left-panel">
                <NavLeftBar auth={props.auth} />
            </nav>

            <section className="right-panel">
                <Routes>
                    <Route exact path="/" element={<StartPage />} />
                    <Route exact path="/profil" element={<ProfilPage userId={props.userId} mail={props.mail}/>} />
                    <Route exact path="/dodaj-kurs" element={<AddCourse/>} />
                    <Route exact path="/moje-kursy" element={<MyCourse />} />
                    <Route exact path="/kurs/:id" element={<EditCourse />} />
                    <Route exact path="/nauczyciele" element={<TeachersPage />} />
                    <Route exact path="/moje-informacje" element={<MyInformation />} />
                    <Route exact path="/nauczyciele/:id" element={<TeacherPage />} />
                    <Route exact path="/nauczyciele/:id/:course" element={<Course />} />
                </Routes>
            </section>
        </main>

    );

}

export default Main;