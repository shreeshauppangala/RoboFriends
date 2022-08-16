import {REQUEST_ROBOTS_FAIL,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_PENDING,CHANGE_SEARCHFIELD  } from "./const";

export const setSearchField = (text) => ({
    type : CHANGE_SEARCHFIELD,
    payload : text
})

export const requestRobots = () => {
    return (dispatch) => {
        dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
            .then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
            .catch(error=>dispatch({type:REQUEST_ROBOTS_FAIL,payload:error}))
    }
}