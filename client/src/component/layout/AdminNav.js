import React from 'react'
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <nav>
            <ul className="nav flex-column">

                <li className="nav-item">
                    <Link to="/admin/dashboard"
                        className="nav-link">
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/admin/create-person"
                        className="nav-link">
                        Create
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/calendar"
                        className="nav-link">
                        Calendar
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/AdminLearning"
                        className="nav-link">
                        Checkbox
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/AdminCharts"
                        className="nav-link">
                        Charts
                    </Link>
                </li>
                <li>
                    <Link to="/admin/dropdownlist-insert"
                        className="nav-link">
                        dropdownlist-insert
                </Link>
                </li>
                <li>
                    <Link to="/admin/fullcalendar"
                        className="nav-link">
                        ปฏิทิน FullCalendar
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default AdminNav
