import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './TeacherCourse.css'
import axios from "axios";


export default function TeacherPage() {

    const params = useParams('');
    const [info, setInfo] = useState([]);

    const getTeacherCourse = async e => {
        try {

            const response = await axios.get(`https://react-test-app2-default-rtdb.firebaseio.com/course.json`)
            const newInfo = [];
            for (const key in response.data) {
                newInfo.push({ ...response.data[key], id: key });
            }
            setInfo(newInfo.filter(info => info.userId === params.id));
        } catch (ex) {
            console.log(ex.response);
        }
    }

    useEffect(() => {
        getTeacherCourse();
    }, []);



    return (
        <section className="teachers-page">
        
            {info.map(inf =>
                <li key={inf.id}>

                    <Link to={`${inf.id}`}>
                        <b>{inf.title}</b><br/>
                        kategoria: {inf.category}
                    </Link>

                </li>
            )}

        </section>
    );
}