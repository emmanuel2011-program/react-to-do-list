export function TodoItem({completed, id, title, toggleTodo, deleteTodo }){
    return <li>
             <label>
              <input 
                type="checkbox" 
                checked={completed}
                onChange={e => toggleTodo(todo.id, e.target.checked)}
            />
            {title}
          </label>
          <button 
           onClick={() => deleteTodo(todo.id)} 
           className="btn-danger"
           >
            Delete
           </button>
        </li>

}