//this file deals with the dynamic changes of the application
export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`;
export const ADD_COMMENT = `ADD_TASK_COMMENT`;
export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `CREATE_TASK`;
export const REQ_AUTH_USER = `REQUEST_AUTHENTICATE_USER`;
export const PROCESS_AUTH_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const STATE_SET = `SET_STATE`;
export const USERNAME_RESERVED = `USERNAME_RESERVED`;
export const REQUEST_USER_ACCOUNT_CREATION = `REQUEST_USER_ACCOUNT_CREATION`;

export const setCompletion = (id, isComplete = true)=>({
    type:SET_TASK_COMPLETE,
    taskID:id,
    isComplete
});

export const addComment = (commentID, taskID, ownerID, content)=>({
    type:ADD_COMMENT,
    id:commentID,
    task: taskID,
    owner: ownerID,
    content
});

export const requestTaskCreation = (groupID)=>({
    type:REQUEST_TASK_CREATION,
    groupID
});

export const createTask = (taskID, groupID, ownerID)=>({
    type:CREATE_TASK,
    taskID,
    groupID,
    ownerID
});

export const setTaskGroup = (taskID, groupID)=>({
    type:SET_GROUP,
    taskID,
    groupID
});

export const setTaskName = (taskID, name)=>({
    type:SET_TASK_NAME,
    taskID,
    name
});

export const requestAuthenticateUser = (username, password)=>({
    type:REQ_AUTH_USER,
    username,
    password
});

export const processAuthenticateUser = (status = AUTHENTICATING, session = null)=>({
    type: PROCESS_AUTH_USER,
    session,
    authenticated: status
});

export const setState = (state = {})=>({
    type:STATE_SET,
    state
});


export const requestCreateUserAccount = (username,password)=>({
    type:REQUEST_USER_ACCOUNT_CREATION,
    username,
    password
});