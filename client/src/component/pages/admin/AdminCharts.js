import React from 'react'
import AdminNav from '../../layout/AdminNav';
import { Col, Row, Card } from 'antd';
import { Pie, Bar } from 'react-chartjs-2';

const AdminCharts = () => {
    const data1 = {
        "ผู้ใช้งานทั้งหมด": 9,
        "ผู้ใช้งานที่ปิดไว้": 10,
        "Admin": 5,
        "User": 7
    }

    
    //  ["ผู้ใช้งานทั้งหมด", "ผู้ใช้งานที่ปิดไว้", "Admin", "User"]
    //  [9, 10, 5, 7]


    const labelArr1 = Object.keys(data1)
    const dataArr1 = Object.values(data1)
    console.log(labelArr1)
    console.log(dataArr1)

    const data2 = [
        { id: 1, name: "tam", score: 120 },
        { id: 2, name: "foo", score: 100 },
        { id: 3, name: "bar", score: 110 },
        { id: 4, name: "pra", score: 130 },
        { id: 5, name: "prayut", score: 100 },
    ]


    // ["tam", "foo", "bar", "pra", "prayut"]
    // [120, 100, 110, 130, 100]


    const labelArr2 = [];
    const dataArr2 = [];
    for (const dataObj of data2) {
        labelArr2.push(dataObj.name)
        dataArr2.push(dataObj.score)
    }
    console.log(labelArr2)
    // const labelArr = [];
    // const dataArr = []
    // for (const daObj of data2) {
    //     labelArr.push(daObj.name)
    //     dataArr.push(daObj.score)
    // }
    // console.log(Object.keys(data1))
    // console.log(Object.values(data1))
    // console.log(labelArr)
    // console.log(dataArr)
    const data = {
        labels: labelArr2,
        datasets: [
            {
                label: '# of Votes',
                data: dataArr2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };


    return (
        <div className="container-fluid">
            <Row>
                <Col span={4}>
                    <AdminNav />
                </Col>
                <Col>
                    <h1>แสดงกราฟ</h1>
                    <Card>
                        {/* Code */}
                        <Pie data={data} />
                        {/* Code */}
                    </Card>
                    <Card>
                        <Bar data={data} options={options} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default AdminCharts
