

export const loadTodo = () => {

    return async dispatch => {
        dispatch({type:"REQUESTING"})
        const response = await fetch("https://todo-app-060721-ft-api.herokuapp.com/todos")
        const data =  await response.json()
        const payload = {todos: data }
        dispatch({type:"SET_TODOS", payload})
        dispatch({type:"DONE_REQUESTING"})
    }

}

export const addTodo = (details) => {

    return async dispatch => {
        dispatch({type:"REQUESTING"})
        const options = {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(details)
        }
        const response = await fetch("https://todo-app-060721-ft-api.herokuapp.com/todos", options)
        const data = await response.json()
        const payload = data
        debugger
        dispatch({type:"ADD_TODO"}, payload)
        dispatch({type:"DONE_REQUESTING"})
    }
}