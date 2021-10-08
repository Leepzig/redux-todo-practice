import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewTodo from './NewTodo'
import TodoList from './TodoList'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {

    })

    return (
        <div>
            <h1>Welcome to Todo List</h1>
            <NewTodo />
            <TodoList />
            
        </div>
    )
}

export default Home
