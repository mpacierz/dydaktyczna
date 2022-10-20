import React, { useEffect, useState } from "react";
import axios from "axios";
import './TeachersPage.css';
import TeacherTable from "./TeacherTable";

function TeachersPage() {

    const [teacher, setTeacher] = useState([]);
    const [querry, setQuerry] = useState('');

    const getTeachers = async e => {
        try {

            const response = await axios.get(`https://react-test-app2-default-rtdb.firebaseio.com/users.json`)

            const newInfo = [];
            for (const key in response.data) {
                newInfo.push({ ...response.data[key], id: key });
            }
            setTeacher(newInfo);
        } catch (ex) {
            console.log(ex.response);
        }
    }

    const search = (data) => {
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(querry.toLowerCase()) 
        )
    }

    

    useEffect(() => {
        getTeachers();
    }, []);


    return (
        <section className="teachers-page">
            <h1>Wszyscy nauczyciele:</h1>

            <section className="search">
                <input
                    type="text"
                    placeholder="wyszukiwanie"
                    onChange={(event) => setQuerry(event.target.value)}
                />
            </section>

            <section>
                <TeacherTable data={search(teacher)} />
            </section>
        </section>
    );
};

export default TeachersPage;