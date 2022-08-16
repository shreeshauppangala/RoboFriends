export const getSearchFieldSelector = (state) => {

    return state.searchRobots.searchField
}

export const getRobotsSelector = (state) => {

    return state.requestRobots?.robots || []
}

export const getIsPendingSelector = (state) => {

    return state.requestRobots.isPending
}

export const getErrorSelector = (state) => {

    return state.requestRobots.error
}
