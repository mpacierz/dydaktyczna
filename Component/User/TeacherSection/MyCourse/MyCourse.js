import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './MyCourse.css';

export default function MyCourse(props) {

    const [info, setInfo] = useState([]);
    const [courseId, setCourseId] = useState('');

    const getCourse = async e => {
        try {

            const response = await axios.get(`https://react-test-app2-default-rtdb.firebaseio.com/course.json`)

            const newInfo = [];
            for (const key in response.data) {
                newInfo.push({ ...response.data[key], id: key });
            }
            setInfo(newInfo.filter(info => info.userId === window.localStorage.getItem('user-id')));
        } catch (ex) {
            console.log(ex.response);
        }
    }

    const deleteCourse = async e => {
        try {

            const response = await axios.delete(`https://react-test-app2-default-rtdb.firebaseio.com/course/${e.target.value}.json`)
            window.alert("Kurs został usunięty");
        } catch (ex) {
            console.log(ex.response);
        }
    }

    useEffect(() => {
        getCourse();
    }, []);


    return (<>
        <section className="my-course">
            <h1>Moje aktualne kursy:</h1>
            {
                info.map(inf => (
                    <li key={inf.id}>

                        <section className="course">
                            <h5><b>{inf.title}</b></h5>
                            <h5>{inf.category} </h5>
                            <h5>tagi: {inf.tag}</h5>
                        </section>

                        <Link to={`/kurs/${inf.id}`} >
                            <button className="button-format">Podgląd / edycja</button>
                        </Link>


                        <button type="button" value={inf.id} onClick={deleteCourse} className="button-format">Usuń kurs</button><br /> <br />

                    </li>

                ))
            }
        </section>
    </>);
}