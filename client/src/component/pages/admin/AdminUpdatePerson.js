import React, { useState, useEffect } from 'react'
import AdminNav from '../../layout/AdminNav';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getPersons, updatePerson } from '../../functions/person';


const AdminUpdatePerson = ({ history, match }) => {
    const { user } = useSelector((state) => ({ ...state }))

    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const [file, setFile] = useState("");
    const [fileold, setFileold] = useState("");
    const [filename, setFilename] = useState("");



    useEffect(() => {
        loadPerson(match.params.id, user.token);
    }, [])
    const loadPerson = (id, authtoken) => {
        getPersons(id, authtoken)
            .then((res) => {
                // console.log('res',res)
                setFileold(res.data.pic)
                setFilename(res.data.pic)
                setName(res.data.name)
            }).catch(err => {
                toast.error(err);
                console.log(err);
            })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('filename', filename);
        formData.append('fileold', fileold);
        formData.append('data', name);

        updatePerson(formData, match.params.id, user.token)
            .then(res => {
                loadPerson(user.token);
                setLoading(false);
                toast.success('Update ' + res.data.name + ' Success')
                history.push('/admin/create-person')
            }).catch(err => {
                setLoading(false);
                toast.error(err.response)
            });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>
                <div className="col">
                    {loading
                        ? <h4>Loading...</h4>
                        : <h4>Admin CreatePerson</h4>}
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>ชื่อ</label>
                            <input type="text"
                                className="form-control"
                                value={name}
                                autoFocus
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="custom-file mb-4">
                            <input
                                type="file"
                                className="custom-file-input"
                                onChange={(e) => {
                                    setFile(e.target.files[0])
                                    setFilename(e.target.files[0].name)
                                }}
                            />
                            <label className="custom-file-label"
                                htmlFor="customfile"
                            >
                                {filename}
                            </label>
                           
                        </div>

                        <button className="btn btn-outline-primary">Update</button>
                    </form>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default AdminUpdatePerson
