import { useState } from "react";

export default function AddTodo({ addTodo }) {
  // const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  // fonction pour ajouter une nouvelle tache a la liste
  // function addTodo(content){
  //     const todo = {
  //         id: crypto.randomUUID(),
  //         content,
  //         done: false,
  //         edit:false
  //     }
  //     setTodoList([...todoList, todo])
  // }

  //gere changement input
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  // gere le bouton Add
  function handleClick() {
    // if(value.trim() !== ''){ // autre maniere de faire
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  }

  function handleKeyDown(e) {
    // if(e.key === 'Enter'){ // pression du bouton
    if (e.code === "Enter") {
      // handleClick();
      addTodo(value);
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Write your task here"
        className="mr-15 flex-fill"
      />
      <button onClick={handleClick} className="btn btn-primary">
        Add a Task
      </button>
    </div>
  );
}
