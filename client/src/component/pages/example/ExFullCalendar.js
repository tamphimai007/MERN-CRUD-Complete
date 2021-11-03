import React, { useState, useEffect } from 'react'
import ExampleNav from '../../layout/ExampleNav';
import { Col, Row, Card } from 'antd';
import { Modal, Button, Tag, Divide } from 'antd';

import moment from 'moment'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'

import LineNotify from './component/LineNotify'

//function
import { createEvent, listEvent, listMonthCurrent, updateFile } from './functions/fullcalendar';

import './ExFullCalendar.css'
//token Linnotify jiwPgGLuE5Q60fPTt9SkTTfLz5Xycb6CfCgoVWwlqPh
const ExFullCalendar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible1, setIsModalVisible1] = useState(false);
    const [value, setValue] = useState({
        title: 'test',
        start: '',
        end: '',
        color: ''
    })
    const [event, setEvent] = useState([])
    const [monthCurrent, setMonthCurrent] = useState([])

    const [id, setId] = useState("")
    const [file, setFile] = useState("")

    const [image, setImage] = useState('')

    const department = [
        { id: '1', name: 'แผนกบัญชี', color: '#00DFB1' },
        { id: '2', name: 'แผนกไอที', color: '#009BDF' },
        { id: '3', name: 'แผนกการเงิน', color: 'red' },
        { id: '4', name: 'ผู้จัดการ', color: '#FFC200' }
    ]

    useEffect(() => {
        loadData();
        drag();
    }, [])

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }


    const loadData = () => {
        listEvent()
            .then(res => {
                setEvent(res.data)
                console.log('res', res)
                // const newData = res.data
                // for (let i = 0; i < res.data.length; i++) {
                //     console.log(newData[i].start = 'tam')
                // }
                // console.log(newData)
                // const tam = modifyKey(res.data)
                // console.log('tam', tam)

            }).catch(err => {
                console.log(err)
            })
        listMonthCurrent()
            .then(res => {
                setMonthCurrent(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    // const modifyData = (arrayData) => {
    //     const newData = arrayData
    //     for (let i = 0; i < newData.length; i++) {
    //         newData[i].start = 'tam'
    //     }
    //     return newData
    // }

    // const modifyKey = (arrayData) => {
    //     const newData = arrayData
    //     for (let i = 0; i < newData.length; i++) {
    //         // .key ใหม่ได้เลย = value ที่ต้องการ
    //         newData[i].tam = newData[i].start

    //         // วิธีการลบ key
    //         delete newData[i].start
    //         delete newData[i].end
    //         delete newData[i].title
    //     }
    //     return newData
    // }
    const drag = () => {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
                let id = eventEl.getAttribute("id");
                let title = eventEl.getAttribute("title");
                let color = eventEl.getAttribute("color");

                return {
                    id: id,
                    title: title,
                    color: color,
                };
            }
        });
    }


    const handleEventClick = (info) => {
        showModal1()
        setId(info.event._def.extendedProps._id)
        setImage(info.event._def.extendedProps.filename)
        console.log(info.event)
    }

    const handleSelect = (info) => {
        showModal()
        // let title = prompt('Please enter a new title for your event')
        // let calendarApi = selectInfo.view.calendar

        // calendarApi.unselect() // clear date selection
        console.log('start', info.startStr)
        console.log('select', moment(info.endStr).add(-1, "days").format('YYYY-MM-DD'))
        setValue({
            ...value,
            start: info.startStr,
            end: moment(info.endStr).add(-1, "days").format('YYYY-MM-DD')
        })
    }
    const handleEventReceive = (eventInfo) => {
        const value = {
            id: eventInfo.draggedEl.getAttribute("id"),
            title: eventInfo.draggedEl.getAttribute("title"),
            color: eventInfo.draggedEl.getAttribute("color"),
            start: eventInfo.date,
            end: new Date(moment(eventInfo.date).add(1, "hour")
                .valueOf())
        };
        console.log(value)
        createEvent({ value })
            .then(res => {
                listMonthCurrent()
                    .then(res => {
                        setMonthCurrent(res.data)
                    }).catch(err => {
                        console.log(err)
                    })
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    };
    const handleEventsMove = (events) => {
        console.log('move', events)
    }
    const handledrop = (info) => {
        console.log(info)
    }
    const handleEvents = (events) => {
        console.log(events)
    }
    const events = [
        { title: "Today", date: new Date() },
        { title: "Tam", start: '2021-05-01', end: '2021-08-02' }
    ];
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        console.log('submit')
        createEvent({ value })
            .then(res => {
                loadData();
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    };

    const handleChange = (info) => {
        console.log(info)
    }




    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal1 = () => {
        setIsModalVisible1(true);
        setImage('')
    };

    const handleOk1 = () => {
        setIsModalVisible(false);
        const formData = new FormData();
        formData.append('id', id)
        formData.append('file', file)
        updateFile(formData)
            .then(res => {
                loadData();
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        setIsModalVisible1(false);
    };

    const handleCancel1 = () => {
        setIsModalVisible1(false);
    };
    const onChangeValue = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    // const handleDateClick = (arg) => { // bind with an arrow function
    //     alert(arg.dateStr)
    // }

    const d = moment(new Date()).format('DD/MM/YYYY')
    const r = new Date();
    const dateBetween = monthCurrent.filter(item => {
        // console.log(item.start)
        // return r >= new Date(item.start) && r <= new Date(item.end)    Success!!
        return r >= moment(item.start) && r <= moment(item.end)
    })
    console.log('image', image)
    return (
        <div className="container-fluid">
            <Row>
                <Col span={4}>
                    <ExampleNav />
                </Col>
                <Col span={5}>
                    <Card>
                        <div
                            id="external-events"
                        >
                            <p align="center">
                                <strong> Events</strong>
                            </p>
                            <ul>
                                {department.map(item => (
                                    <li
                                        className="fc-event"
                                        title={item.name}
                                        color={item.color}
                                        key={item.id}
                                        id={item.id}
                                        style={{
                                            backgroundColor: item.color
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <ul>
                            {department.map((item, index) =>
                                <li key={index} style={{
                                    backgroundColor: item.color,
                                }}>{item.name}</li>
                            )}
                        </ul> */}
                    </Card>
                    <hr />
                    <Card title="กิจกรรมในเดือนนี้">
                        <ol>
                            {monthCurrent.map((item, index) =>
                                <li>{d == moment(item.start).format('DD/MM/YYYY')
                                    ? <>{moment(item.start).format('DD/MM/YYYY') + "-" + item.title} <Tag color="green">วันนี้</Tag></>
                                    : r >= moment(item.start) && r <= moment(item.end)
                                        ? <>{moment(item.start).format('DD/MM/YYYY') + "-" + item.title} <Tag color="yellow">ดำเนินการ</Tag></>
                                        : moment(item.start).format('DD/MM/YYYY') + "-" + item.title
                                }</li>
                            )}
                        </ol>
                    </Card>
                </Col>
                <Col span={15}>
                    <h1>Example Fullcalendar</h1>
                    {/* Code */}
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        initialView='dayGridMonth'

                        selectable={true}
                        droppable={true}
                        // dayMaxEvents={true}
                        select={handleSelect}
                        eventClick={handleEventClick}
                        events={event}
                        // eventsSet={handleEventsMove}
                        drop={handleEventReceive}
                        editable={true}
                        eventChange={handleChange}
                    />

                    <Button type="primary" onClick={showModal}>
                        Open Modal
      </Button>
                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>วันที่เริ่ม {value.start}</p>
                        <p>วันที่สิ้นสุด {value.end}</p>
                        <p><input name="title" value={value.title} onChange={onChangeValue} /></p>
                        <select name="color" onChange={onChangeValue}>
                            <option key="999" value="">---กรุณาเลือกแผนก----</option>
                            {department.map((item, index) =>
                                <option key={index} value={item.color} style={{ backgroundColor: item.color }}>{item.name}</option>
                            )}
                        </select>
                    </Modal>


                    <Modal title="Basic Modal" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1}>
                        <p>รายละเอียด</p>
                        {image
                            ? <img src={`${process.env.REACT_APP_IMAGE}/${image}`} width="100%" />
                            : <h1>no pic</h1>
                        }
                        <input type="file" name="file" onChange={handleFile} />
                    </Modal>
                    {/* Code */}
                </Col>
            </Row>
            <LineNotify />

        </div>
    )
}

export default ExFullCalendar
