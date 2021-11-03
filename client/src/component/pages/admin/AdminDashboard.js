import React from 'react'
import AdminNav from '../../layout/AdminNav';
import * as internalIp from 'internal-ip';

const AdminDashboard = () => {
    console.log(internalIp.v4.sync())
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>
                <div>
                    <h1>Admin Dashboard</h1>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
