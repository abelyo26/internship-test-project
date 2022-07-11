import {take, takeEvery,takeLatest,put,all,delay,fork,call} from 'redux-saga/effects'
import { loadusersSuccess,loadusersError,adduserSuccess,adduserError, deleteuserSuccess, deleteuserError,editeuserError,edituserSuccess } from './Actions'
import * as types from "./Actions"
import { loadUserApi,AddUserApi, DeleteUserApi, EditUserApi } from './Api'


function* onLoadUsersStartAsync(){
    try{
        const responce = yield call(loadUserApi)
        if (responce.status === 200){
            yield delay(500);
            yield put(loadusersSuccess(responce.data))
        }
    } catch(error){
        yield put(loadusersError(error.responce.data))
    }

}
function* onaddUserStartAsync({payload}){
    try{
        const responce = yield call(AddUserApi,payload)
        if (responce.status === 200){
            yield put(adduserSuccess(responce.data))
        }
    } catch(error){
        yield put(adduserError(error.responce.data))
    }

}
function* ondeleteUserStartAsync(userid){
    try{
        const responce = yield call(DeleteUserApi,userid)
        if (responce.status === 200){
            yield delay(500);
            yield put(deleteuserSuccess(userid))
        }
    } catch(error){
        yield put(deleteuserError(error.responce.data))
    }

}
// this is the object that it came from the dispach from the edit user and we can
// destructure it from here
function* oneditUserStartAsync({payload:{id,data}}){
    try{
        const responce = yield call(EditUserApi,id,data)
        if(Response.status == 200){
            yield put(edituserSuccess())
        }
    }catch(error){
        yield put(editeuserError(error.responce.data))
    }
}


function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START,onLoadUsersStartAsync)
}
function* onAddUser() {
    yield takeLatest(types.ADD_USER_START,onaddUserStartAsync)
}
function* onDeleteuser(){
    while(true){
        const {payload: userid}=yield take(types.DELETE_USER_START)
        yield call(ondeleteUserStartAsync,userid)
    }
}
function* onEditUser() {
    yield takeLatest(types.EDIT_USER_START,oneditUserStartAsync)
}
const userSagas =[
    fork(onLoadUsers),
    fork(onAddUser),
    fork(onDeleteuser),
    fork(onEditUser)
]

export default function* rootSaga(){
    yield all([...userSagas])
}