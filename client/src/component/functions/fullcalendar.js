import axios from 'axios';

//REACT_APP_API=http://localhost:8000/api/fullcalendar
export const createFullcalendar = async (values) =>
    await axios.post(process.env.REACT_APP_API + '/fullcalendar', values)

export const listFullcalendar = async () =>
    await axios.get(process.env.REACT_APP_API + '/fullcalendar')

export const listCurrentMonth = async () =>
    await axios.get(process.env.REACT_APP_API + '/current-month')