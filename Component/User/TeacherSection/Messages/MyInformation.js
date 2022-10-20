import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MyInformation() {

    const [info, setInfo] = useState([]);

    const getInformation = async e => {
        try {

            const response = await axios.get(`https://react-test-app2-default-rtdb.firebaseio.com/infromation.json`);
            const newInfo = [];
            for (const key in response.data) {
                newInfo.push({ ...response.data[key], id: key });
            }
            setInfo(newInfo.filter(info => info.userId === window.localStorage.getItem('user-id')));
        } catch (ex) {
            console.log(ex.response);
        }
    }

    useEffect(() => {
        getInformation();
    }, []);


    return (
        <section>
            Moje bieżące informacje: <br /><br />

            {
                info.map(inf => (
                    <li key={inf.id}>

                        <section className="course">
                            <b>{inf.title}</b><br />
                            {inf.text}<br /><br />
                            <i>{inf.data} - {inf.time}</i>
                        </section>

                    </li>
                ))
            }


        </section>
    );
}