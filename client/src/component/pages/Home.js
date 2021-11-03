import React, { useState } from 'react'
import { Col, Row, Card, Popover, Typography } from 'antd';

const { Text, Link } = Typography;
const Home = () => {
    const [user, setUser] = useState({
        name: "phongphat",
        program: ['cis', '403']
    })

    const { Meta } = Card;



    const contentOk = () => (
        <div>
            <Text type="success">คุณมีสิทธ์เข้าใช้งานโปรแกรม</Text>
        </div>
    );
    const contentNoOk = () => (
        <div>
            <Text mark>คุณไม่มีสิทธิ์เข้าใช้งานโปรแกรมนี้</Text>
        </div>
    );
    // style={{ filter: "grayscale(100%)" }}
    console.log(user.program)
    var tam;
    return (
        <>
            <Row style={{ alignItems: 'center' }} justify="center" align="middle">
                <h1>Home</h1>
            </Row>
 

        </>
    )
}

export default Home
