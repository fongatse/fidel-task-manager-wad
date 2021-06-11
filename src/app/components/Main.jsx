import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TaskDetailWithData } from './TaskDetail'
import { DashboardWithData } from './Dashboard'
import { NavigationWithData } from './Navigation'
import { LoginWithData } from './Login'
import { SignupWithData } from './Signup'
import { store } from '../store';
import { history } from '../store/history';
import { Redirect } from 'react-router';

const RouteGuard = Component =>({match})=>
    !store.getState().session.authenticated ?
        <Redirect to="/"/> :
        <Component match={match}/>;

export const Main = ()=>(
    <Router history={history}>
        <Provider store={store}>
            <div className="container mt-3">
                <NavigationWithData/>
                <Route exact path="/" component={LoginWithData} />
                <Route exact path="/signup" component={SignupWithData}/>
                <Route exact
                       path="/dashboard"
                       render={RouteGuard(DashboardWithData)}/>

                <Route exact
                       path="/task/:id"
                       render={RouteGuard(TaskDetailWithData)} />
            </div>
        </Provider>
    </Router>
);