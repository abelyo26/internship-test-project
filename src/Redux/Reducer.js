import { combineReducers } from "redux";
import * as types from './Actions'

const initialState ={
    users: [],
    loading: false, // is for the providing a spinner on the home page
    error: null //holds the errors that occur
}

const usersReducer =(state = initialState,action) =>{
    switch(action.type){
        case types.LOAD_USERS_START:
        case types.ADD_USER_START:
        case types.DELETE_USER_START:
        case types.EDIT_USER_START:
            return{
                ...state,
                loading: true
            }
        case types.EDIT_USER_ERROR:
        case types.ADD_USER_SUCCESS:
            return{
                ...state,
                loading:false,
            }
        case types.LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                users: action.payload
            }
        case types.DELETE_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                users: state.users.filter((item)=> item.id !==action.payload)
            }

        case types.LOAD_USERS_ERROR:
        case types.ADD_USER_ERROR:
        case types.DELETE_USER_ERROR:
        case types.EDIT_USER_ERROR:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        
    default:
        return state;
    }
}

//Root reducer
const rootReducer = combineReducers({
    data: usersReducer
})

export default rootReducer 