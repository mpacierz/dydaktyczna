import React from "react";
import { Link } from "react-router-dom";

const TeacherTable = ({ data }) => {
    return (
        <section>
            {
                data.map(item =>
                    <li key={item.id}>
                        <section className="teacher">
                            <Link to={`/nauczyciele/${item.userId}`}>
                                {item.rank} <b>{item.name} </b> - wydział: {item.departament}
                            </Link>
                        </section>
                    </li>
                )
            }
        </section>
    );
}

export default TeacherTable;