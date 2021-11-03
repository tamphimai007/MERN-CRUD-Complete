import axios from 'axios'


//localhost:8000/api/dropdown-insert
export const createDropdown = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/dropdown-insert`, value)


//localhost:8000/api/dropdown-insert
export const listDropdown = async () =>
    await axios.get(`${process.env.REACT_APP_API}/dropdown-insert`)