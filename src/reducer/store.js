import { LOAD_QUESTIONS, UPDATE_QUESTIONS, NEXT, INC_CORRECT, RESET, START, SHOW_ALERT, HIDE_ALERT, SHOW_RESULT, HIDE_RESULT, IS_LOADING } from './const.js';

const redux = require('redux');

const defaultState = {
    questions: {
        list: [],
        current: 0,
        correct: 0,
        limit: 1
    },
    status: {
        isAlert: {show: false, result: false},
        isStart: false,
        isFinish: false,
        isLoading: false
    }
};

const questionsReducer = (state = {...defaultState.questions}, action) => {
    switch (action.type){
        case UPDATE_QUESTIONS:
            {
                return {...state, old: action.list};
            }
        case LOAD_QUESTIONS:
            {
                return {...state, list: action.list};
            }
        case NEXT:
            {
                return {...state, current: state.current + 1};
            }
        case INC_CORRECT:
            {
                return {...state, correct: state.correct + 1};
            }
        case RESET:
            {      
                return {...defaultState.questions};
            }
        default:
            return {...state};
    }
}
const statusReducer = (state = {...defaultState.status}, action) => {
    switch (action.type){
        case START:
            {
                return {...state, isStart: true};
            }
        case SHOW_ALERT:
            {
                return {...state, isAlert: {show: true, result: action.result}};
            }
        case HIDE_ALERT:
            {
                return {...state, isAlert: {show: false}};
            }
        case SHOW_RESULT:
            {              
                return {...state, isFinish: true};
            }
        case HIDE_RESULT:
            {             
                return {...state, isFinish: false};
            }
        case RESET:
            {              
                return {...defaultState.status};
            }
        case IS_LOADING:
            {              
                return {...state, isLoading: action.param};
            }
        default:
            return {...state};
    }
}

const reducer = redux.combineReducers({
    questions: questionsReducer,
    status: statusReducer
});
const store = redux.createStore(reducer);

// store.subscribe(() => {
//     console.log('DEFAULT', defaultState);
//     console.log(store.getState());
// });

export default store;