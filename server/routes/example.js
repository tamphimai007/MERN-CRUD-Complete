const express = require('express')
const router = express.Router();
/*---------------- Dropdown ------------------- */
//controller
const { createDropdown, listDropdown } = require('../controllers/example/example')

// @Endpoint    localhost:8000/api/dropdown-insert
// @Method      POST
// @Access      Public
router.post('/dropdown-insert', createDropdown)

// @Endpoint    localhost:8000/api/dropdown-insert
// @Method      GET
// @Access      Public
router.get('/dropdown-insert', listDropdown)
/*---------------- /Dropdown ------------------- */


/*---------------- Fullcalendar ------------------- */

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/fullImage')
    },
    filename: (req, file, cb) => {
        cb(null, 'file-' + Date.now() + '.' +
            file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
})

const upload = multer({ storage: storage }).single('file')

const { createFullcalendar, listFullcalendar, listMonthCurrent, listCurrentDate, updateFile } = require('../controllers/example/fullcalendar')

const { notify } = require('../functions/notify')
// @Endpoint    localhost:8000/api/event-fullcalendar
// @Method      POST
// @Access      Public
router.post('/event-fullcalendar', createFullcalendar)

// @Endpoint    localhost:8000/api/event-fullcalendar
// @Method      GET
// @Access      Public
router.get('/event-fullcalendar', listFullcalendar)

// @Endpoint    localhost:8000/api/ex-current-month
// @Method      GET
// @Access      Public
router.get('/ex-current-month', listMonthCurrent)

// @Endpoint    localhost:8000/api/ex-test-notify
// @Method      GET
// @Access      Public
router.get('/ex-test-notify', listCurrentDate)




//@Endpoint     http://localhost:8000/api/ex-update-file
//@Method       POST
//@Access       Public
router.post('/ex-update-file', upload, updateFile)

/*---------------- /Fullcalendar ------------------- */
module.exports = router;