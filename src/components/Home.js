import React from 'react'

import NewTodo from './NewTodo'
import TodoList from './TodoList'

const Home = () => {


    return (
        <div>
            <h1>Welcome to Todo List</h1>
            <NewTodo />
            <TodoList />
            
        </div>
    )
}

export default Home
