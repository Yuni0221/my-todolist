import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export default function TodoListItem(content) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  const tabArr = [
    { name: "All tasks 🌷" },
    { name: "Ongoing task 🐰" },
    { name: "Completed task 🍋" },
  ];

  const clickTabHandler = (index) => {
    setCurrentTab(index);
  };

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

  const completedTodos = todos.filter((item) => completedItems.includes(item));
  const ongoingTodos = todos.filter((item) => !completedItems.includes(item));

  let displayedTodos = todos;
  if (currentTab === 1) {
    displayedTodos = ongoingTodos;
  } else if (currentTab === 2) {
    displayedTodos = completedTodos;
  }

  return (
    <>
      <div className={"w-[150px] h-[700px] mt-20"}>
        {tabArr.map((el, index) => (
          <li
            className={`flex h-[32px] justify-center align-center list-none items-center bg-Navy mt-1 text-Beige ${
              index === 0
                ? "rounded-tl-[18px]"
                : index === tabArr.length - 1
                ? "rounded-bl-[18px]"
                : ""
            }`}
            onClick={() => clickTabHandler(index)}
          >
            {el.name}
          </li>
        ))}
        <div className={twMerge("ml-[200px]")}>
          {currentTab !== 0 && tabArr[currentTab].content}
        </div>
      </div>

      <div
        className={twMerge(
          `w-[500px] h-[700px] flex justify-center bg-DarkBeige rounded-[40px]`
        )}
      >
        <ul className={"w-[400px] [500px] pt-10"}>
          {displayedTodos.map((item) => (
            <li className={"flex items-center p-1"}>
              <input
                className={"mr-2 w-4 h-4 accent-pink-500"}
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
          className="flex items-center absolute bottom-12"
        >
          <input
            placeholder="what is your plan?"
            type="text"
            value={todo}
            onChange={handleChangeTodo}
            className={twMerge(
              `w-[380px] h-[70px] bg-Beige rounded-[28px] mr-4 p-4 outline-none`
            )}
          ></input>
          <button className="flex justify-center w-[50px] h-[50px] bg-Blue rounded-full items-center">
            <GrFormAdd className="w-[30px] h-[30px]" />
          </button>
        </form>
      </div>
    </>
  );
}
