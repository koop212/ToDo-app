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

function* addTask(action) {
    try{
        yield axios.post('/api/tasks', action.payload);
        console.log('show add task',action.payload)
        yield put({ type: 'FETCH_TASKS' });
    }catch(error) {
        console.log('Error in addTask saga', error);
    }
}

// function* deleteTask(action) {
//     try{
//         yield axios.delete(`/api/tasks/${action.payload.id}`);
//         yield put({type: 'FETCH_TASKS'});
//     }catch(error) {
//         console.log('Error in deleteTask saga', error);
//     }
// }

function* taskSaga() {
    yield takeLatest('FETCH_TASKS', fetchTasks);
    // yield takeLatest('DELETE_TASK', deleteTask);
    yield takeLatest('ADD_TASK', addTask);
}

export default taskSaga;