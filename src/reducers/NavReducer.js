export var NavReducer = (
    state={
        currentPage: "Home",
    },action
) => {
    switch (action.type){
        case "SET_CURRENT_PAGE":
            return Object.assign({}, state, {
                currentPage: action.data
            })
        default:
            return state
    }
}