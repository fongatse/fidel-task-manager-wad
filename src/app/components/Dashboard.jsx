/**
 * Dashboard react component
 */

import { connect } from 'react-redux';
import React from 'react';
import { TaskListWithData } from '../components/Tasklist';

const Dashboard = ({groups})=>(
    <div className="row">
        {groups.map(group=>(
            <TaskListWithData key={group.id} {...group} className="col"/>
        ))}
    </div>
);

const mapStateToData = ({groups})=>({groups});

export const DashboardWithData = connect(mapStateToData)(Dashboard);
