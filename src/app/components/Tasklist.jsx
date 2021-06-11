import { connect } from 'react-redux';
import React from 'react';
import { requestTaskCreation } from '../store/mutations'
import { ListItemWithData } from './TaskListItem'

export const TaskList = ({tasks,name,createNewTask,id})=>(
    <div className="card p-2 m-2">
        <h2>
            {name}
        </h2>
        <div>
            {tasks.map(task=>(
                <ListItemWithData {...task} key={task.id}/>
            ))}
        </div>
        <div>
            <button className="btn btn-primary btn-block mt-2" onClick={()=>createNewTask(id)}>Add New</button>
        </div>
    </div>
);

const mapStateToData = (state, {name, id})=>{
    return {
        name:name,
        tasks: state.tasks.filter(task=>task.group === id),
        id
    };
};

const mapDispatchToProps = (dispatch, {id})=>({
    createNewTask(){
        dispatch(requestTaskCreation(id));
    }
});

export const TaskListWithData = connect(mapStateToData, mapDispatchToProps)(TaskList);