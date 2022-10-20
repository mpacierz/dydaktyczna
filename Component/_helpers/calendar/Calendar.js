import React from "react";
import "./Calendar.css"

function Calendar() {

    return (<>


        <div className="month">
            <ul>
                <li className="prev">&#10094;</li>
                <li className="next">&#10095;</li>
                <li>August<br /><span>2021</span></li>
            </ul>
        </div>

        <ul className="weekdays">
            <li>Pn</li>
            <li>Wt</li>
            <li>Śr</li>
            <li>Cz</li>
            <li>Pi</li>
            <li>So</li>
            <li>Ni</li>
        </ul>

        <ul className="days">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li><span className="active">10</span></li>
            <li>11</li>
            ...etc
        </ul>
    </>);
}

export default Calendar;