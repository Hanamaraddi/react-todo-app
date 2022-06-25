import React from "react";
import "./TodoList.css";

function TodoList({ todolist, deleteHandler }) {
  return (
    <div>
      {todolist.map((todo, index) => (
        <div key={index}>
          <h2>
            {todo} &nbsp;{" "}
            <button className="del-btn" onClick={() => deleteHandler(index)}>
              Delete
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
