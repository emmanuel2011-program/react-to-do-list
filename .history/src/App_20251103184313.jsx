import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem ]= useState("")
  const [todos, settodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    settodos([...todos, {id: crypto.randomUUID(), title: newItem, completed: false },

    ])
    setNewItem("")
  }
  console.log(todos)
  return (
    <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
    
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} 
      type="text" 
      id="item" 
      />
    </div>  
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.map(todo => {
      return (
    <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed}
        onchange={e => toggleTodo(todo.id,)}/>
        {todo.title}
      </label>
      <button className="btn-danger">Delete</button>
    </li>
      )
    })}
  </ul>
  </>
)
}