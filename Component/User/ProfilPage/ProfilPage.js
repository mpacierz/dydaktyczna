import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './ProfilPage.css';

export default function ProfilePage(props) {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [rank, setRank] = useState('');
    const [departament, setDepartament] = useState('');
    const [info, setInfo] = useState([]);

    const [reload, setReload] = useState(false);

    const [idus] = [...info];

    const getUserInfo = async e => {
        try {
            setReload(false);
            const response = await axios.get(`https://react-test-app2-default-rtdb.firebaseio.com/users.json`)
            const newInfo = [];
            for (const key in response.data) {
                newInfo.push({ ...response.data[key], id: key });
            }
            setInfo(newInfo.filter(info => info.userId === window.localStorage.getItem('user-id')));
            
        } catch (ex) {
            console.log(ex);
        }
    }

    const addData = async e => {
        try {
            const response = await axios.post(`https://react-test-app2-default-rtdb.firebaseio.com/users.json`, {
                departament: departament,
                name: name,
                rank: rank,
                userId: localStorage.getItem('user-id'),
            })
            setReload(true);
        } catch (ex) {
            console.log(ex);
        }
    }

    const updateData = async e => {
        try {
            const response = await axios.put(`https://react-test-app2-default-rtdb.firebaseio.com/users/${idus.id}.json`, {
                //const response = await axios.post(`https://react-test-app2-default-rtdb.firebaseio.com/users.json`, {
                departament: departament,
                name: name,
                rank: rank,
                userId: localStorage.getItem('user-id'),
            })
            setReload(true);
        } catch (ex) {
            console.log(ex);
        }
    }    
  
    useEffect(() => {
        getUserInfo();
    }, [reload]);

    return (<>
        <section className="profil-page">
            <h1>Mój profil</h1>
            {
                info.map(inf => <li key={inf.id}>
                    <section className="course">
                        <b>Aktualne informacje:</b><br /><br />
                        imie i nazwisko: <b>{inf.name}</b><br />
                        stopień: <b>{inf.rank}</b><br />
                        wydział: <b>{inf.departament}</b><br /><br />
                    </section>
                </li>)
            }

            <br />
            <b>Zakutalizuj informacje o twoim profilu:</b><br />
            Należy uzupełnić wszystkie informacje!

            <section>
                <br />
                imie i nazwisko:<br />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br />

                <br />stopień:<br />
                <input
                    type="text"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                /><br />

                <br /> wydział:<br />
                <input
                    type="text"
                    value={departament}
                    onChange={(e) => setDepartament(e.target.value)}
                /><br /><br />

                {info.length == 0 ?
                    <>
                        <button onClick={addData} className="button-format">Dodaj informacje</button>
                    </> : <>
                        <button onClick={updateData} className="button-format">Aktualizuj informacje</button>
                    </>}
            </section>

        </section>
    </>);
}