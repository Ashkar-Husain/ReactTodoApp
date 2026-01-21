import './App.css'

function App() {
  

  return (
    <>
      <div className="container">
        <div className="todo">
          <div id="form">
            <div className="todo-app"><span>Todo App</span></div>
            <input type="text" id='title' className='form-control' />
            <button className='btn'>Submit</button>
            <div id="listItems">
              <ul>
                <li>I have to message John <span>Completed</span></li>
                <li>I hav to eat some food <span>Completed</span></li>
                <li>I have to call Saifi <span>Completed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
