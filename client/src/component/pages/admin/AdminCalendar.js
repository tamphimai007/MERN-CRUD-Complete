import React, { useState, useEffect } from 'react'
import AdminNav from '../../layout/AdminNav';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Col, Row, Checkbox, Table } from 'antd';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBInput } from "mdbreact";
const AdminCalendar = () => {
    const events = [{ title: "Today", date: new Date() }];

    const [user, setUser] = useState([
        {
            id: '1',
            name: 'phongphat',
            program: ['track', '403']
        },
        {
            id: '2',
            name: 'arissara',
            program: ['cis', 'track']
        },
    ])
    const program = ['cis', 'track', '403']
    // program.includes(pro.name)
    const handleEventClick = (e) => {
        console.log('tam')
    }
    const handleSelect = (info) => {
        console.log(info)
    }
    const handledrop = (info) => {
        console.log(info)
    }
    const onChange = (checkedValues) => {
        // console.log(`checked = ${e.target.checked} ${e.target.value}`);
        console.log('checked = ', checkedValues);
    }
    const columns = [
        {
            title: 'ชื่อ',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'โปรแกรม',
            render: (record) => (
                <>
                    {program.map(item =>
                        <Checkbox
                            defaultChecked=
                            {
                                record.program.includes(item)
                            }
                            onChange={onChange}
                            value={item}>{item}</Checkbox>
                    )}
                </>
            )
        }
    ]
    return (
        <div className="container-fluid">
            <Row>
                <Col span={2}>
                    <AdminNav />
                </Col>
                <Col span={22}>
                    <Table columns={columns} dataSource={user} rowKey="id" />

                    {/* {user.program.map(item =>
                        // console.log(item)
                        <Checkbox onChange={onChange} value={item}>{item}</Checkbox>
                    )} */}
                    {/* <Checkbox onChange={onChange} value={'cis'} onChange={onChange}>Checkbox</Checkbox> */}
                    <MDBInput label="Material input" />
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        editable={true}
                        selectable={true}
                        droppable={true}
                        select={(info) => handleSelect(info)}
                        eventClick={handleEventClick}
                        drop={(info) => handledrop(info)}
                        events={events}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default AdminCalendar
