const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

export var changeNav = (text) => {
    return{
        type: SET_CURRENT_PAGE,
        data: text
    }
} 