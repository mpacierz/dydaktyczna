import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './Course.css'
import axios from "axios";
import parse from 'html-react-parser';

export default function Course() {

    const params = useParams('');
    const [info, setInfo] = useState([]);


    const getCourse = async e => {
        try {

            const response = await axios.get(`https://react-test-app2-default-rtdb.firebaseio.com/course/${params.course}.json`)
            const newInfo = [response.data];
            setInfo(newInfo.filter(info => info.userId === params.id));

        } catch (ex) {
            console.log(ex.response);
        }
    }

    useEffect(() => {
        getCourse();
    }, []);



    return (
        <section className="course-page">
            {info.map(inf =>
                <li key={params.id}>

                    <h1>{inf.title}</h1>
                    <h2>{inf.category}</h2> <br />

                    <section className="contents">
                        {parse(inf.text)}
                    </section>

                    <br /><br />
                    Tagi:
                    <section className="tags">
                        {inf.tag}
                    </section>


                </li>
            )}
        </section>
    );
}