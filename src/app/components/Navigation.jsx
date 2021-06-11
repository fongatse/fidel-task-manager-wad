/**
 * navigation react component is present on all non-login pages,
 * 
 */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import { UsernameWithData } from './UsernameDisplay'
import * as mutations from '../store/mutations';

const Navigation = ({id, authenticated})=>(
    <div className="header">
        <Link to="/dashboard">
            <h1>
                Fidel Task Manager
            </h1>
        </Link>

        { authenticated ?
            <h4>
                Welcome, <UsernameWithData id={id}/>!
            </h4>
            : null
        }
    </div>
);

const mapStateToData = ({session})=>({
    id:session.id,
    authenticated:session.authenticated == mutations.AUTHENTICATED
});

export const NavigationWithData = connect(mapStateToData)(Navigation);

