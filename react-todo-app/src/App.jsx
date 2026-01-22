import './App.css'
import { useEffect, useState } from 'react'
function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem('reactTodos'));
      return storedTodos || [];
    } catch {
      return [];
    }
  });



  useEffect(() => {
    localStorage.setItem('reactTodos', JSON.stringify(todos));
  }, [todos]);


  function handleSubmit() {
    if (!todo.trim()) {
      alert("Todo is required!");
      return;
    }

    const newTodo = {
      title: todo,
      isCompleted: "Pending"
    }

    setTodos(prev => [...prev, newTodo])

    setTodo('');

  }

  function toggleIsCompleted(index) {
    setTodos(prevTodos => {
      return prevTodos.map((todo, idx) => {
        if (idx === index) {
          return {
            ...todo,
            isCompleted:
              todo.isCompleted === "Pending" ? "Completed" : "Pending"
          };
        }
        return todo;
      });
    });
  }





  return (
    <>
      <div className="container">
        <div className="todo">
          <div id="form">
            <div className="todo-app"><span>Todo App</span></div>
            <input type="text" id='title' className='form-control'
              value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className='btn' onClick={() => handleSubmit()}>Submit</button>
            <div id="listItems">
              <ul>
                {
                  todos.map((todo, index) => (
                    <li key={index}>{todo.title} <span style={todo.isCompleted == 'Pending' ? { color: 'red' } : { color: 'green' }} onClick={() => toggleIsCompleted(index)}>{todo.isCompleted}</span></li>
                  ))
                }


              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
