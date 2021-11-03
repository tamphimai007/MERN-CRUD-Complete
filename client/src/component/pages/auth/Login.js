import React, { useState } from 'react'
import { toast } from 'react-toastify';
// Functions
import { loginHandler } from '../../functions/auth';
import { useDispatch } from 'react-redux';

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const { name, password } = formData;

    const roleBasedRedirect = (res) => {
        if (res === 'admin'){
            history.push('/admin/dashboard')
        }else{
            history.push('/user/dashboard')
        }
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const newUser = {
            name,
            password
        }
        loginHandler(newUser)
            .then(res => {
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: {
                        token: res.data.token,
                        name: res.data.payload.user.name,
                        role: res.data.payload.user.role
                    }
                })
                localStorage.setItem('token', res.data.token)
                setLoading(false)
                toast.success('Login Complete');
                roleBasedRedirect(res.data.payload.user.role);
            }).catch(err => {
                setLoading(false)
                toast.error(err.response.data.msg)
            })

    }

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {!loading
                        ? (<h1>Login</h1>)
                        : (<h1>Loading...</h1>)
                    }
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                autoFocus
                                placeholder="Username"
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                autoFocus
                                placeholder="password"
                                onChange={e => onChange(e)}
                            />
                        </div>

                        <button
                            className="btn btn-success"
                            type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
