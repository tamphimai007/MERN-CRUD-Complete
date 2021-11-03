const express = require('express');
const router = express.Router();

const {
    createFullcalendar,
    listFullcalendar,
    listCurrentMonth } = require('../controllers/fullcalendar')

//@Endpoint     http://localhost:8000/api/fullcalendar
//@Method       POST
//@Access       Public
router.post('/fullcalendar', createFullcalendar)

//@Endpoint     http://localhost:8000/api/fullcalendar
//@Method       GET
//@Access       Public
router.get('/fullcalendar', listFullcalendar)

//@Endpoint     http://localhost:8000/api/current-month
//@Method       GET
//@Access       Public
router.get('/current-month', listCurrentMonth)




module.exports = router;