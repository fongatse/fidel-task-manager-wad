/*
file defining the default state of the application
*/
export const defaultState = {
    users:[{
        id:"u1",
        name:"Dev"
    },
    {
        id:"u2",
        name:"Admin"
    }],
    groups:[{
        name:"To Do",
        id:"g1", 
        owner:"u1"
    },],
    tasks:[{
        name:"Do tests",
        id:"t1",
        group:"g1",
        owner:"u1",
        isComlete: false
    },
   { name:"Second task",
    id:"t2",
    group:"g1",
    owner:"u2",
    isComlete: true
}],
    comments:[{
        owner:"u1",
        id:"c1",
        task:"t1",
        content:"Super comment"
    }]
}