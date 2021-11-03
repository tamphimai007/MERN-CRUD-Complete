// 1. import useState
import React, { useState } from 'react'
import ExampleNav from '../../layout/ExampleNav';
import { Col, Row } from 'antd';

const ExModifyObjects = () => {
    // 2. สร้าง State
    const [dataNum, setDataNum] = useState(0)
    const [dataText, setDataText] = useState('ฝากกดติดตามด้วยนะครับ')
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState({
        title: '',
        name: '',
        detail: ''
    })

    // 4. เปลี่ยนค่า State
    const handlePlus = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    console.log(values)
    return (
        <div className="container-fluid">
            <Row>
                <Col>
                    <h1>มารู้จัก useState ให้มากยิ่งขึ้น</h1>
                    {/* Code */}
                    {/* 3. เรียกใช้ State*/}
                    <input name="title" onChange={handlePlus} />
                    <input name="name" onChange={handlePlus} />
                    <input name="detail" onChange={handlePlus} />
                    <button onClick={handlePlus}>Click</button>


                    {/* <h1>Number: {dataNum}</h1>
                    {/* Code */}
                </Col>
            </Row>
        </div>
    )
}

export default ExModifyObjects


{/* <Col span={4}>
                    <ExampleNav />
                </Col> */}
