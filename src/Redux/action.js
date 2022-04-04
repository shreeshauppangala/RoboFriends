import {REQUEST_ROBOTS_FAIL,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_PENDING,CHANGE_SEARCHFIELD  } from "./const";

export const setSearchField = (text) => ({
    type : CHANGE_SEARCHFIELD,
    payload : text
})

export const requestRobots = () => {
    return (disp) => {
        disp({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
            .then(data=>disp({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
            .catch(error=>disp({type:REQUEST_ROBOTS_FAIL,payload:error}))
    }
}