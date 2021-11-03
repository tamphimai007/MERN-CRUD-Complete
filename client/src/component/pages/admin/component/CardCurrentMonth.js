import React from 'react'
import { Card, Tag, Divider } from 'antd';
import moment from 'moment'
const CardCurrentMonth = ({ currentMonth }) => {


    const d = moment(new Date()).format('DD/MM/YYYY')
    const r = moment(new Date());

    const dateBetween = currentMonth.filter(item => {
        return r >= moment(item.start) && r <= moment(item.end)
    })
    console.log(dateBetween)
    // วันที่ปัจจุบัน >= start และ วันที่ปัจจุบัน <= วันสิ้นสุด
    return (
        <>
            <Card title="กิจกรรมในเดือนนี้">
                <ol>
                    {currentMonth.map((item, index) =>
                        <li>{d == moment(item.start).format('DD/MM/YYYY')
                            ? <>{moment(item.start).format('DD/MM/YYYY') + "-" + item.title} <Tag color="red">วันนี้</Tag></>
                            : r >= moment(item.start) && r <= moment(item.end)
                                ? <>{moment(item.start).format('DD/MM/YYYY') + "-" + item.title} <Tag color="green">ระหว่างดำเนินการ</Tag></>
                                : moment(item.start).format('DD/MM/YYYY') + "-" + item.title
                        }</li>
                    )}
                </ol>
            </Card>
        </>
    )
}

export default CardCurrentMonth
