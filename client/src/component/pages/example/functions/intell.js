import axios from 'axios'


//localhost:8000/api/commander
export const createCommander = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/commander`, value)

//localhost:8000/api/commander
export const listCommander = async () =>
    await axios.get(`${process.env.REACT_APP_API}/commander`)
/*---------------------------------------*/

//localhost:8000/api/commanderposition
export const createCommanderPosition = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/commanderposition`, value)

//localhost:8000/api/commanderposition
export const listCommanderPosition = async () =>
    await axios.get(`${process.env.REACT_APP_API}/commanderposition`)
/*---------------------------------------*/

//localhost:8000/api/org
export const createOrg = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/org`, value)

//localhost:8000/api/org
export const listOrg = async () =>
    await axios.get(`${process.env.REACT_APP_API}/org`)
/*---------------------------------------*/

//localhost:8000/api/platform
export const createPlatform = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/platform`, value)

//localhost:8000/api/platform
export const listPlatform = async () =>
    await axios.get(`${process.env.REACT_APP_API}/platform`)

/*---------------------------------------*/

//localhost:8000/api/armtype
export const createArmType = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/armtype`, value)

//localhost:8000/api/armtype
export const listArmType = async () =>
    await axios.get(`${process.env.REACT_APP_API}/armtype`)

/*---------------------------------------*/

//localhost:8000/api/armrole1
export const createArmRole1 = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/armrole1`, value)

//localhost:8000/api/armrole1
export const listArmRole1 = async () =>
    await axios.get(`${process.env.REACT_APP_API}/armrole1`)

/*---------------------------------------*/

//localhost:8000/api/armrole2
export const createArmRole2 = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/armrole2`, value)

//localhost:8000/api/armrole2
export const listArmRole2 = async () =>
    await axios.get(`${process.env.REACT_APP_API}/armrole2`)

/*---------------------------------------*/
//localhost:8000/api/armrole2
export const createSource = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/source`, value)

//localhost:8000/api/armrole2
export const listSource = async () =>
    await axios.get(`${process.env.REACT_APP_API}/source`)

/*---------------------------------------*/