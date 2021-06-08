//Dashboard for task manager application 
import React from 'react';
import {connect} from 'react-redux'
import {ConnectedTaskList} from './Tasklist'

export const Dashboard = ({groups}) =>(
    <div>
<h2>App Dashboard</h2>
{groups.map(group=>(
<div>
<ConnectedTaskList id = {group.id} name = {group.name}/>
</div>))}
    </div>
)
//connects state data to dashboard
function mapStateToProps (state){
    return {
        groups:state.groups
    }
}
//exports connected dashboard to be used in Main component
export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);