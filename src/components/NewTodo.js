import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todo'

const NewTodo = () => {
    const [form, setForm] = useState({title:"", completed:false})
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
        dispatch(addTodo(form))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" value={form.title} onChange={e=>setForm({title: e.target.value})} placeholder="todo item"/>
                <input type="submit" placeholder="+"/>
            </form>
            
        </div>
    )
}

export default NewTodo
