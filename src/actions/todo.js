
export const addTodo = (formContent) => {
    const payload = {
        formContent
    }
    return {payload, type:"ADD_TODO"}
}

export const loadTodo = () => {

    return async dispatch => {
        dispatch({type:"REQUESTING"})
        const response = await fetch("")
        const data =  await response.json()
        const payload = { todos: data}

        dispatch({type:"SET_TODOS", payload})
        dispatch({type:"DONE_REQUESTING"})
    }

}