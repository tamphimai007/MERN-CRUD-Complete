import axios from 'axios'


//localhost:8000/api/event-fullcalendar
export const createEvent = async (value) =>
    await axios.post(`${process.env.REACT_APP_API}/event-fullcalendar`, value)

export const listEvent = async () =>
    await axios.get(`${process.env.REACT_APP_API}/event-fullcalendar`)

export const listMonthCurrent = async () =>
    await axios.get(`${process.env.REACT_APP_API}/ex-current-month`)


export const updateFile = async (formData) =>
    await axios.post(`${process.env.REACT_APP_API}/ex-update-file`, formData)
//localhost:8000/api/dropdown-insert
// export const listDropdown = async () =>
//     await axios.get(`${process.env.REACT_APP_API}/dropdown-insert`)