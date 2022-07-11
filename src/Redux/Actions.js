// Action Types
export const LOAD_USERS_START ="LOAD_USERS_START"
export const LOAD_USERS_SUCCESS ="LOAD_USERS_SUCCESS"
export const LOAD_USERS_ERROR ="LOAD_USERS_ERROR"

export const ADD_USER_START ="ADD_USER_START"
export const ADD_USER_SUCCESS ="ADD_USER_SUCCESS"
export const ADD_USER_ERROR ="ADD_USER_ERROR"

export const DELETE_USER_START ="DELETE_USER_START"
export const DELETE_USER_SUCCESS ="DELETE_USER_SUCCESS"
export const DELETE_USER_ERROR ="DELETE_USER_ERROR"

export const EDIT_USER_START ="EDIT_USER_START"
export const EDIT_USER_SUCCESS ="EDIT_USER_SUCCESS"
export const EDIT_USER_ERROR ="EDIT_USER_ERROR"


// Fetch user
export const loadusersStart =()=>({
    type: LOAD_USERS_START
})

export const loadusersSuccess =(users)=>({
    type: LOAD_USERS_SUCCESS,
    payload: users
})

export const loadusersError =(error)=>({
    type: LOAD_USERS_START,
    payload: error
})
// Add user
export const adduserStart =(user)=>({
    type: ADD_USER_START,
    payload: user
})

export const adduserSuccess =()=>({
    type: ADD_USER_SUCCESS,
})

export const adduserError =(error)=>({
    type: ADD_USER_ERROR,
    payload: error
})
// Delete user
export const deleteuserStart =(userid)=>({
    type: DELETE_USER_START,
    payload: userid
})

export const deleteuserSuccess =(userid)=>({
    type: DELETE_USER_SUCCESS,
    payload: userid,
})

export const deleteuserError =(error)=>({
    type: DELETE_USER_ERROR,
    payload: error
})
// Edit(update) user
// while editing we cant pass both the data and the id at the same time
// so what we can do is we can pass it like object which consists of both id and data
export const editteuserStart =(userinfo)=>({
    type: EDIT_USER_START,
    payload: userinfo
})

export const edituserSuccess =()=>({
    type: EDIT_USER_SUCCESS,
    
})

export const editeuserError =(error)=>({
    type: EDIT_USER_ERROR,
    payload: error
})
