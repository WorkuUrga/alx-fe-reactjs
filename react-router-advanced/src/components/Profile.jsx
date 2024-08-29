
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Switch, useRouteMatch} from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

function Profile() {
    let {path, url} = useRouteMatch();

    return (
    <div>
        <h2>Profile</h2>
        <ul>
            <li>
                <Link to={`${url}/ProfileDetails`}>Profile Details</Link>
            </li>
            <li>
                <Link to={`${url}/ProfileSettings`}>Profile Settings</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path={path}>Please Select an option.</Route>
            <Route path={`${path}/ProfileDetails`}>
                <ProfileDetails />
            </Route>
            <Route path={`${path}/ProfileSettings`}>
                <ProfileSettings />
            </Route>
        </Switch>
    </div>
    )
}

export default Profile