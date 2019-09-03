import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTasks() {
    try{
        let response = yield axios.get('/api/tasks');
        console.log('In fetchTasks', response);
        yield put({type: 'SET_TASKS', payload: response.data});
    }catch(error) {
        console.log('Error in fetchTasks', error);
    }
}

function* taskSaga() {
    yield takeLatest('FETCH_TASKS', fetchTasks);
}

export default taskSaga;