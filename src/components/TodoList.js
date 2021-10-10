import React, { useEffect } from 'react'
import { loadTodo } from '../actions/todo'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadTodo())
    }, [dispatch])

    const todoLis = useSelector(state => state.todos)
    
    return (
        <div>
            <h3>Todo Items:</h3>
            <ul>
                {todoLis.map( todo => <li key={todo.title}>{todo.title}</li>)}
            </ul>
            
        </div>
    )
}

export default TodoList
