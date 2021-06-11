//Username react component
import React from 'react';
import { connect } from 'react-redux';

export const UsernameDisplay = ({name})=>(
    <span>{name}</span>
);

const mapStateToData = (state,ownProps)=>{
    return state.users.find(user=>user.id===ownProps.id)
};
export const UsernameWithData = connect(mapStateToData)(UsernameDisplay);