import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = [...todo, task];
    setTodo(newTodo);
    setTask(" ");
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todo.filter((todo, index) => index !== indexValue);
    setTodo(newTodos);
  };

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">TODO APP</h2>

            <form onSubmit={submitHandler} className="card1">
              <input
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
                className="input-data"
              />
              <button className="btn-add">+</button>
            </form>
          </div>
        </div>
        <TodoList todolist={todo} deleteHandler={deleteHandler} />
      </center>
    </div>
  );
}

export default App;
