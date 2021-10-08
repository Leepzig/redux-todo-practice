import React from 'react'
import { useState } from 'react'

const NewTodo = () => {
    const [form, setForm] = useState({title:""})


    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
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
