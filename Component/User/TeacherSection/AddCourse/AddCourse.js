import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddCourse(props) {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');
    const [tag, setTag] = useState('');
    const [file, setFile] = useState('');

    const alert = () => {
        console.log('kurs został dodany poprawnie');
    }



    const addData = async e => {
        try {
            const response = await axios.post(`https://react-test-app2-default-rtdb.firebaseio.com/course.json`, {
                title: title,
                category: category,
                text: text,
                tag: tag,
                userId: localStorage.getItem('user-id'),
            })

            window.alert("Kurs został dodany poprawnie");
            navigate('/moje-kursy');

        } catch (ex) {
            console.log('błąd ', ex);

        }
    }



    return (
        <section className="edit-course">
            <h1>Dodaj kurs</h1><br />

            <h1>Tytuł</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br /><br />

            <h1>Kategoria</h1>
            <input
                type="text"
                value={category}
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
                value={tag}
                onChange={(e) => setTag(e.target.value)}
            />

            <section className="center">
                <button onClick={addData} className='button-format-middle'>Dodaj</button><br /><br />
            </section>

        </section>
    );
}