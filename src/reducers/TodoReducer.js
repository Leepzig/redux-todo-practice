const initialState = {loading: true, todos:[]}

const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_TODO":
            return {...state, todo: action.payload}
        case "ADD_TODO":
            return {...state, todo: [...state.todo, action.payload]}
        case "REQUESTING":
            return {...state, loading: true}
        case "DONE_REQUESTING":
            return {...state, loading: false}
        default:
            return state
    }
}

export default todoReducer