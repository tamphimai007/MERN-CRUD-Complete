const express = require('express')
const router = express.Router();

const { createDropdown, listDropdown } = require('../controllers/dropdown')

//@Endpoint     http://localhost:8000/api/dropdown
//@Method       POST
//@Access       Public
router.post('/dropdown', createDropdown)

//@Endpoint     http://localhost:8000/api/dropdown
//@Method       GET
//@Access       Public
router.get('/dropdown', listDropdown)


module.exports = router;