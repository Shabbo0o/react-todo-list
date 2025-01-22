import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [todos, setTodos] = useState(() => {
    const localStoredItem = JSON.parse(localStorage.getItem("todos"));
    return localStoredItem || [];
  });
  const [input, setInput] = useState("");


  useEffect(() => {
    const localStoredItem = JSON.parse(localStorage.getItem("todos"));
    if (localStoredItem){
      setTodos(localStoredItem);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  const addTodo = () => {
    if (input.trim()){
      setTodos([...todos, 
        {id: Date.now(),
        text:input, 
        completed:false,
      }])
      setInput("")
    }
  }

  return (
    <>
    
      <div className='flex items-center justify-center bg-gradient-to-r bg-sky-900'>
        <div className='bg-white shadow-lg rounded-3xl p-16 m-16  '>
          <h1 className='text-3xl font-bold text-center mb-6'>React Todo List</h1>

          <div className='mb-4 flex'>
            <input 
            placeholder='Add a task' 
            className='flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-900' type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)} />
            <button 
            className='bg-gray-700 text-white px-4 py-2 rounded-r-lg rounded-l-none hover:bg-gray-600'
            onClick={addTodo}
            >Add</button>
          </div>
          <ul className='space-y-2'>
            {
              todos.map((todo) => (
                <li 
                key={todo.id}
                className='flex items-center p-3 rounded-lg bg-gray-100 border border-gray-200' >
                  <input type='checkbox'
                  className='mr-2 h-5 w-5 text-blue-700'
                  checked={todo.completed}
                  onChange={() => setTodos(
                    todos.map((item) => (
                      item.id === todo.id ? {...item, 
                        completed: !item.completed
                      } : item
                    ))
                  )}
                  />
                  <span className={`flex-grow ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                    {todo.text}
                  </span>
                  <button
                  className='ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-700'
                  onClick={() => setTodos(todos.filter((item) => item.id !== todo.id))}>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
