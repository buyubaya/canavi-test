import { LOAD_QUESTIONS, INC_CORRECT, START, SHOW_ALERT, HIDE_ALERT, NEXT, SHOW_RESULT, IS_LOADING } from '../reducer/const.js';

export const Start = (dispatch) => {
    dispatch({type: IS_LOADING, param: true});
    let oldQuestions = JSON.parse(localStorage.getItem('oldQuestions')) || [];
    // for( var i=0,len=list.length ){

    // }
    dispatch({
        type: LOAD_QUESTIONS,
        list: [
            {"time_to_display":"07:56","options":["12:37","07:56","00:40"]},
            {"time_to_display":"06:31","options":["06:31","18:34","19:33"]},
            {"time_to_display":"09:48","options":["12:05","09:48","19:31"]},
            {"time_to_display":"15:14","options":["03:16","15:14","05:02"]},
            {"time_to_display":"22:11","options":["22:11","23:14","02:03"]},
            {"time_to_display":"08:06","options":["08:06","17:39","20:11"]},
            {"time_to_display":"00:30","options":["18:20","07:01","00:30"]},
            {"time_to_display":"21:56","options":["21:56","12:22","02:30"]},
            {"time_to_display":"08:44","options":["08:44","17:59","09:44"]},
            {"time_to_display":"10:54","options":["22:38","01:01","10:54"]},
            {"time_to_display":"15:47","options":["15:47","01:53","00:14"]}
        ]
    });	
    setTimeout(() => {
        dispatch({type: START});
        dispatch({type: IS_LOADING, param: false});
    }, 1000);
}

export function Answer(value){
    const { dispatch } = this.props;
    if(value){
        dispatch({type: INC_CORRECT});
        dispatch({type: SHOW_ALERT, result: true});
    }
    else {
        dispatch({type: SHOW_ALERT, result: false});
    }

    setTimeout(() => {
        dispatch({type: HIDE_ALERT});
        
        if( this.props.current < this.props.limit ){
            dispatch({type: NEXT});
        }
        else {
            dispatch({type: SHOW_RESULT});
        }

        this.clicked = false;
    }, 1000);
}