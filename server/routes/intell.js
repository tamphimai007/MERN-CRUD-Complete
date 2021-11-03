const express = require('express')
const router = express.Router();

//controllers
const {
    createCommander, listCommander,
    createCommanderPosition, listCommanderPosition,
    createOrg, listOrg,
    createPlatform, listPlatform,
    createArmType, listArmType,
    createArmRole1, listArmRole1,
    createArmRole2, listArmRole2,
    createSource, listSource
} = require('../controllers/example/intell');

//@Endpoint     localhost:8000/api/commander
//@Method       POST
//@access       Public
router.post('/commander', createCommander)

//@Endpoint     localhost:8000/api/commander
//@Method       GET
//@access       Public
router.get('/commander', listCommander)

/* -------------------------------------------- */
//@Endpoint     localhost:8000/api/commanderposition
//@Method       POST
//@access       Public
router.post('/commanderposition', createCommanderPosition)

//@Endpoint     localhost:8000/api/commanderposition
//@Method       GET
//@access       Public
router.get('/commanderposition', listCommanderPosition)

/* -------------------------------------------- */
//@Endpoint     localhost:8000/api/org
//@Method       POST
//@access       Public
router.post('/org', createOrg)

//@Endpoint     localhost:8000/api/org
//@Method       GET
//@access       Public
router.get('/org', listOrg)

/* -------------------------------------------- */
//@Endpoint     localhost:8000/api/platform
//@Method       POST
//@access       Public
router.post('/platform', createPlatform)

//@Endpoint     localhost:8000/api/platform
//@Method       GET
//@access       Public
router.get('/platform', listPlatform)

/* -------------------------------------------- */
//@Endpoint     localhost:8000/api/armtype
//@Method       POST
//@access       Public
router.post('/armtype', createArmType)

//@Endpoint     localhost:8000/api/armtype
//@Method       GET
//@access       Public
router.get('/armtype', listArmType)

/* -------------------------------------------- */
//@Endpoint     localhost:8000/api/armrole1
//@Method       POST
//@access       Public
router.post('/armrole1', createArmRole1)

//@Endpoint     localhost:8000/api/armrole1
//@Method       GET
//@access       Public
router.get('/armrole1', listArmRole1)

/* -------------------------------------------- */
//@Endpoint     localhost:8000/api/armrole2
//@Method       POST
//@access       Public
router.post('/armrole2', createArmRole2)

//@Endpoint     localhost:8000/api/armrole2
//@Method       GET
//@access       Public
router.get('/armrole2', listArmRole2)

/* -------------------------------------------- */
//@Endpoint     localhost:8000/api/source
//@Method       POST
//@access       Public
router.post('/source', createSource)

//@Endpoint     localhost:8000/api/source
//@Method       GET
//@access       Public
router.get('/source', listSource)

/* -------------------------------------------- */


module.exports = router