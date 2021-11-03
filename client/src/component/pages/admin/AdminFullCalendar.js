import React, { useState, useEffect } from 'react'
import AdminNav from '../../layout/AdminNav';
import { Col, Row } from 'antd';
import { Modal } from 'antd';
//FullCalendar
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import CardCurrentMonth from './component/CardCurrentMonth';
//functions
import { createFullcalendar, listFullcalendar, listCurrentMonth } from '../../functions/fullcalendar';

const AdminFullCalendar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [values, setValues] = useState({
        title: '',
        start: '',
        end: '',
        color: ''
    })
    const [event, setEvent] = useState([])
    const [currentMonth, setCurrentMonth] = useState([])

    const depathment = [
        { id: 1, name: "แผนกการเงิน", color: '#77E26C' },
        { id: 2, name: "แผนกบัญชี", color: 'red' },
        { id: 3, name: "แผนกไอที", color: '#6CA9E2' },
    ]
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        listFullcalendar()
            .then(res => {
                setEvent(res.data)
            }).catch(err => {
                console.log(err)
            })
        listCurrentMonth()
            .then(res => {
                setCurrentMonth(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    console.log(currentMonth)
    const onChangeValue = (e) => {
        console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    console.log(values)

    const handleSelect = (info) => {
        showModal();
        console.log(info.startStr, info.endStr)
        setValues({
            ...values,
            start: info.startStr,
            end: info.endStr
        })
    }
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        createFullcalendar({ values })
            .then(res => {
                loadData()
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div className="container-fluid">
            <Row>
                <Col span={4}>
                    <AdminNav />
                </Col>
                <Col span={5}>
                    <ul>
                        {depathment.map((item, index) =>
                            <li style={{ backgroundColor: item.color }}
                                key={index}
                                value={item.color}>{item.name}</li>
                        )}
                    </ul>
                    <hr />
                    <CardCurrentMonth currentMonth={currentMonth} />
                </Col>
                <Col span={15}>
                    <h1>React-FullCalendar</h1>
                    {/* Code */}
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        weekends={true}
                        selectable={true}
                        select={handleSelect}
                        events={event}
                    />
                    {/* Code */}
                </Col>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>วันที่เริ่ม {values.start}</p>
                    <p>วันที่สิ้นสุด {values.end}</p>
                    <input value={values.title} name="title" onChange={onChangeValue} />
                    <select name="color" onChange={onChangeValue}>
                        <option key="9999" value="null">---กรุณาเลือกแผนก---</option>
                        {depathment.map((item, index) =>
                            <option
                                style={{ backgroundColor: item.color }}
                                key={index}
                                value={item.color}>{item.name}</option>
                        )}
                    </select>
                </Modal>
            </Row>
        </div>
    )
}

export default AdminFullCalendar
