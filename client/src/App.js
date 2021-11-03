import React, { useState, useEffect } from 'react';
// CSS
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Notify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Component
import Navbar from './component/layout/Navbar';

// Router
import { Switch, Route } from 'react-router-dom';
import UserRoute from './component/routes/UserRoute';
import AdminRoute from './component/routes/AdminRoute';

//Pages
import Login from './component/pages/auth/Login';
import Register from './component/pages/auth/Register';
import Home from './component/pages/Home';
import AdminDashboard from './component/pages/admin/AdminDashboard';
import AdminCreatePerson from './component/pages/admin/AdminCreatePerson';
import AdminUpdatePerson from './component/pages/admin/AdminUpdatePerson';
import AdminCalendar from './component/pages/admin/AdminCalendar';
import AdminLearning from './component/pages/admin/AdminLearning';
import AdminCharts from './component/pages/admin/AdminCharts';
import UserDashboard from './component/pages/user/UserDashboard';
import AdminFullCalendar from './component/pages/admin/AdminFullCalendar';
import AdminDropdown from './component/pages/admin/AdminDropdown';

//Example
import ExampleDashboard from './component/pages/example/ExampleDashboard';
import DropdownListInsert from './component/pages/example/DropdownListInsert';
import ExFullCalendar from './component/pages/example/ExFullCalendar';
import ExModifyObjects from './component/pages/example/ExModifyObjects';
import ExIntell from './component/pages/example/ExIntell';

// Redux
import { useDispatch } from 'react-redux';
// functions
import { currentUser } from './component/functions/auth';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const idTokenResult = localStorage.token;
    // console.log('App', idTokenResult);
    if (idTokenResult) {
      currentUser(idTokenResult)
        .then(res => {
          // console.log('App', res)
          dispatch({
            type: 'LOGGED_IN_USER',
            payload: {
              name: res.data.name,
              token: idTokenResult,
              role: res.data.role,
              id: res.data._id
            }
          })
        }).catch(err => {
          console.log(err)
        })
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/create-person" component={AdminCreatePerson} />
        <AdminRoute exact path="/admin/update-person/:id" component={AdminUpdatePerson} />
        <AdminRoute exact path="/admin/calendar" component={AdminCalendar} />
        <AdminRoute exact path="/admin/AdminLearning" component={AdminLearning} />
        <AdminRoute exact path="/admin/AdminCharts" component={AdminCharts} />
        <AdminRoute exact path="/admin/dropdownlist-insert" component={AdminDropdown} />
        <AdminRoute exact path="/admin/fullcalendar" component={AdminFullCalendar} />

        {/* Example */}
        <AdminRoute exact path="/example/dashboard" component={ExampleDashboard} />
        <AdminRoute exact path="/example/dropdownlist-insert" component={DropdownListInsert} />
        <AdminRoute exact path="/example/fullcalendar" component={ExFullCalendar} />
        <AdminRoute exact path="/example/modify-object" component={ExModifyObjects} />
        <AdminRoute exact path="/example/intell" component={ExIntell} />

        <UserRoute exact path="/user/dashboard" component={UserDashboard} />
      </Switch>
    </div>
  );
}

export default App;
