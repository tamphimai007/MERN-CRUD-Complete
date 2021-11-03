import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const ExampleNav = () => {
    return (
        <nav>
            <ul className="nav flex-column">

                <li className="nav-item">
                    <Link to="/example/dashboard"
                        className="nav-link">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/example/dropdownlist-insert"
                        className="nav-link">
                        dropdownlist-insert
                    </Link>
                </li>
                <li>
                    <Link to="/example/fullcalendar"
                        className="nav-link">
                        fullcalendar
                    </Link>
                </li>
                <li>
                    <Link to="/example/modify-object"
                        className="nav-link">
                        แปลง/แก้ไข ค่าใน Objects
                    </Link>
                </li>
                <li>
                    <Link to="/example/intell"
                        className="nav-link">
                        สถานการณ์ข่าว
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default ExampleNav
