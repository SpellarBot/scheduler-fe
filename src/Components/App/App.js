import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";


import Employee from '../Employee/Employee';
import EmployeeCreate from '../Employee/EmployeeCreate';
import EmployeeUpdate from '../Employee/EmployeeUpdate'
import EmployeeDetails from '../Employee/EmployeeDetails'

import ManagerCreate from '../Manager/ManagerCreate';
import ManagerList from '../Manager/ManagerList'
import ManagerDetails from '../Manager/ManagerDetails';
import ManagerUpdate from '../Manager/ManagerUpdate';

import WeeklyAvailabilityCreate from '../WeeklyAvailability/WeeklyAvailabilityCreate';
<<<<<<< HEAD
import WeeklyAvailability from '../WeeklyAvailability/WeeklyAvailability';

import UnavailabilityCreate from '../Unavailability/UnavailabilityCreate';
import Unavailability from '../Unavailability/Unavailability'
import UnavailabilityDetails from '../Unavailability/UnavailabilityDetails'

=======
import ShiftSchedCreate from '../ShiftSched/ShiftSchedCreate'
import ShiftSchedList from '../ShiftSched/ShiftSchedList';
import ShiftSchedUpdate from '../ShiftSched/ShiftSchedUpdate'
import ShiftSchedDetail from '../ShiftSched/ShiftSchedDetail'
>>>>>>> shiftsched

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Link to="/">
          <h1 className="nav-link active">Scheduler</h1>
        </Link>

        <nav className="nav nav-pills nav-fill nav justify-content-center van">

          <Link to="/employees">
            <h2 className="nav-link active">Employee Roster</h2>
          </Link>

          <Link to="/employee/new">
            <h2 className="nav-link active">Add Employee</h2>
          </Link>

          <Link to="/managers">
            <h2 className="nav-link active">Managers</h2>
          </Link>

          <Link to="/manager/new">
            <h2 className="nav-link active">Add Manager</h2>
          </Link>

          <Link to="/unavailability">
            <h2 className="nav-link active">View Time Off Requests</h2>
          </Link>

          <Link to="/unavailability/new">
            <h2 className="nav-link active">Create Time Off Request</h2>
          </Link>

          <Link to="/availability">
            <h2 className="nav-link active">View Employee Weekly Availability</h2>
          </Link>

          <Link to="/availability/new">
            <h2 className="nav-link active">Create Weekly Availability</h2>
          </Link>

          <Link to="/shiftschedules">
            <h2 className="nav-link active">Shift Schedules List</h2>
          </Link>

          <Link to="/shiftschedule/new">
            <h2 className="nav-link active">Schedule A Shift</h2>
          </Link>
        </nav>

        <main>
          <Switch>
            {/* <Route
            exact path="/employee/:id" render={routerProps => <EmployeeDetail {...routerProps} />} /> */}

            <Route
              exact path="/employee/new" render={routerProps => <EmployeeCreate {...routerProps} />} />

            <Route
              exact path="/employees" render={routerProps => <Employee {...routerProps} />} />

            <Route
              exact path="/employee/edit/:id" render={routerProps => <EmployeeUpdate {...routerProps} />} />

            <Route
              exact path="/employee/:id" render={routerProps => <EmployeeDetails {...routerProps} />} />

            <Route
              exact path="/manager/new" render={routerProps => <ManagerCreate {...routerProps} />} />

            <Route
              exact path="/manager/edit/:id" render={routerProps => <ManagerUpdate {...routerProps} />} />

            <Route
              exact path="/manager/:id" render={routerProps => <ManagerDetails {...routerProps} />} />

            <Route
              exact path="/managers" render={routerProps => <ManagerList {...routerProps} />} />

            <Route
              exact path="/unavailability/new" render={routerProps => <UnavailabilityCreate {...routerProps} />} />

            <Route
              exact path="/unavailability" render={routerProps => <Unavailability {...routerProps} />} />

            <Route
              exact path="/unavailability/:id" render={routerProps => <UnavailabilityDetails {...routerProps} />} />

            <Route
              exact path="/availability/new" render={routerProps => <WeeklyAvailabilityCreate {...routerProps} />} />

<<<<<<< HEAD
            <Route
              exact path="/availability" render={routerProps => <WeeklyAvailability {...routerProps} />} />
=======
          <Route
            exact path="/availability" render={routerProps => <WeeklyAvailability {...routerProps} />} />

          <Route
            exact path="/shiftschedule/new" render={routerProps => <ShiftSchedCreate {...routerProps} />} />

          <Route
            exact path="/shiftschedules" render={routerProps => <ShiftSchedList {...routerProps} />} />

          <Route
            exact path="/shiftschedule/edit/:id" render={routerProps => <ShiftSchedUpdate {...routerProps} />} />

          <Route
            exact path="/shiftschedule/:id" render={routerProps => <ShiftSchedDetail {...routerProps} />} />
>>>>>>> shiftsched
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;