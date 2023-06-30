import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function TodoListItem() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    } else {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChangeTodo}></input>
        <button>등록</button>
      </form>
    </div>
  );
}

{
  /* <input
            className={twMerge(
              `w-[440px] h-[70px] bg-Beige rounded-[20px] mb-8 pl-6 outline-none`
            )}
            type="text"
            value={todo}
            onChange={handleChange}
          ></input>
          <button className="absolute w-[44px] h-[44px] ml-[340px] mb-11 bg-Blue rounded-full">
            <GrFormAdd className="w-[30px] h-[30px] ml-2" />
          </button> */
}
