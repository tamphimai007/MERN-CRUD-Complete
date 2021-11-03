import axios from 'axios'

// http://localhost:8000/api/dropdown
export const createDropdown = async (value) =>
    await axios.post(process.env.REACT_APP_API + '/dropdown', value)

export const listDropdown = async () =>
    await axios.get(process.env.REACT_APP_API + '/dropdown')
