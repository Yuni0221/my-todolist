import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export default function TodoListItem() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
    console.log(event.target.value);
  };

  const handleCheckboxChange = (item) => {
    if (completedItems.includes(item)) {
      setCompletedItems(
        completedItems.filter((completedItem) => completedItem !== item)
      );
    } else {
      setCompletedItems([...completedItems, item]);
    }
  };

  const handleClickDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") {
      return;
    } else {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  return (
    <>
      <div className={`relative`}>
        <ul className={"w-[400px] [500px] pt-10"}>
          {todos.map((item) => (
            <li className={"flex items-center p-1"}>
              <input
                className={"mr-2 w-4 h-4  accent-pink-500 rounded-lg"}
                type="checkbox"
                onChange={() => handleCheckboxChange(item)}
                checked={completedItems.includes(item)}
              ></input>
              <div
                className={completedItems.includes(item) ? "line-through" : ""}
              >
                {item}
              </div>
              <div className={"flex ml-auto"}>
                <AiFillDelete
                  className={" text-gray-600 cursor-pointer"}
                  onClick={() => handleClickDelete(item)}
                />
              </div>
            </li>
          ))}
        </ul>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center absolute w-[100%] top-auto left-0 bottom-6"
        >
          <input
            placeholder="what is your plan?"
            type="text"
            value={todo}
            onChange={handleChangeTodo}
            className={twMerge(
              `w-[400px] h-[70px] bg-Beige rounded-[28px] mr-4 p-4 outline-none`
            )}
          ></input>
          <button className="flex justify-center w-[50px] h-[44px] bg-Blue rounded-full items-center">
            <GrFormAdd className="w-[30px] h-[30px]" />
          </button>
        </form>
      </div>
    </>
  );
}
