import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./EditCourse.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function EditCourse(props) {

    const params = useParams();
    const [course, setCourse] = useState([]);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');
    const [tag, setTag] = useState('');
    const [file, setFile] = useState('');



    const getCourse = async e => {
        try {
            const response = await axios.get(`https://react-test-app2-default-rtdb.firebaseio.com/course/${params.id}.json`)

            const newInfo = [];
            newInfo.push(response.data);
            setCourse(newInfo.filter(course => course.userId === window.localStorage.getItem('user-id')));

            setTitle(response.data.title);
            setCategory(response.data.category);
            setText(response.data.text);
            setTag(response.data.tag);

        } catch (ex) {
            console.log(ex.response, 'błąd');
        }
    }


    const updateInfo = async e => {
        try {
            const response = await axios.put(`https://react-test-app2-default-rtdb.firebaseio.com/course/${params.id}.json`, {
                category: category,
                tag: tag,
                text: text,
                title: title,
                userId: localStorage.getItem('user-id'),
            })

            window.alert("Kurs został zaktualizowany");
            //navigate.push(`/kurs/${params.id}`);
        } catch (ex) {
            console.log(ex, "błąd");
        }
    }

    useEffect(() => {
        getCourse('.edit-course');
    }, []);

    //console.log(text);

    return (
        <section className="edit-course">
            {(course.length === 1 ? <>
                {course.map(data => <li key={data.title}>

                    <h1>Tytuł</h1>
                    <input
                        type="text"
                        defaultValue={data.title}
                        onChange={(e) => setTitle(e.target.value)}
                    /><br /><br />

                    <h1>Kategoria</h1>
                    <input
                        type="text"
                        defaultValue={data.category}
                        onChange={(e) => setCategory(e.target.value)}
                    /><br /><br />

                    <h1>Treść</h1>

                    <CKEditor
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(data)
                        }}
                    />

                  <br /><br />

                    <h1>Tagi</h1>
                    <input
                        type="text"
                        defaultValue={data.tag}
                        onChange={(e) => setTag(e.target.value)}
                    />

                    <section className="center">
                        <button onClick={updateInfo} className="button-format-middle">Zatwierdź zmiany</button>
                    </section>

                </li>)}
            </> : <>Brak kursu / brak autoryzacji do kursu</>)}


        </section>
    );

}
