import axios from 'axios';


export const createPerson = async (formData, authtoken, setUploadPerscenTage) =>
    await axios.post(`${process.env.REACT_APP_API}/person`, formData
        , {
            headers: {
                authtoken
            },
            onUploadProgress: progressEvent => {
                setUploadPerscenTage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
            }
        });

export const getPerson = async (authtoken) =>
    await axios.get(`${process.env.REACT_APP_API}/person`
        , {
            headers: {
                authtoken
            }
        });

export const getPersons = async (id, authtoken) =>
    await axios.get(`${process.env.REACT_APP_API}/person/${id}`
        , {
            headers: {
                authtoken
            }
        });


export const removePerson = async (id, authtoken) =>
    await axios.delete(`${process.env.REACT_APP_API}/person/${id}`
        , {
            headers: {
                authtoken
            }
        });

export const updatePerson = async (formData, id, authtoken) =>
    await axios.put(`${process.env.REACT_APP_API}/person/${id}`, formData
        , {
            headers: {
                authtoken
            }
        });