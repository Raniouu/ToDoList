import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodoList([...todoList, todo]);
  }
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20"> To Do List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todoList={todoList} />
        {/* <TodoItem/> */}
        {/* <AddTodo todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} /> */}
      </div>
    </div>
  );
}

export default App;
