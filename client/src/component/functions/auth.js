import axios from 'axios';


export const registerHandler = async (user) => {
    return await axios.post(process.env.REACT_APP_API + '/register',
        user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export const loginHandler = async (user) => {
    return await axios.post(process.env.REACT_APP_API + '/login',
        user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const currentUser = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API + '/current-user',
        {}, {
        headers: {
            authtoken
        }
    });
}

export const currentAdmin = async (authtoken) => {
    return await axios.post(process.env.REACT_APP_API + '/current-admin',
        {}, {
        headers: {
            authtoken
        }
    });
}

