export default function TodoItem({ todo }) {
  return (
    <li className="mb-10 d-flex flex-row justify-content-center align-items-center p-10">
      <span className="flex-fill mr-15"> {todo.content}</span>
      <button className="btn-primary mr-15">Validate</button>
      <button className="btn-primary mr-15">Modify</button>
      <button className="btn reverse-primary mr-15"> Delete</button>
    </li>
  );
}
