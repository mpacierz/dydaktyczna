import React from "react";
import { Link } from "react-router-dom";

export default function NavLeftBar(props) {



    return (<>
        <section className="left-panel-nav">
            <h1>Nawigacja</h1>
            <h4>Kokpit</h4>
            <Link to={'/'} className="link-nav">Strona główna</Link> <br />
            <Link to={'/nauczyciele'} className="link-nav">Nauczyciele </Link><br />
        </section>

        {props.auth == true ? <>
            <section className="left-panel-calendar">
                <h1>Sekcja nauczyciela</h1>
                <Link to={'/moje-kursy'} className="link-nav">Moje kursy </Link><br />
                <Link to={'/dodaj-kurs'} className="link-nav">Dodaj kurs</Link> <br />
                <Link to={'/informacje'} className="link-nav">Informacje ogólne</Link> <br />
                <Link to={'/moje-informacje'} className="link-nav">Moje informacje</Link> <br />
            </section> </> :
            <></>
        }


        <section className="left-panel-calendar">
            <h1>Kalendarz</h1>
        </section>

    </>);
}