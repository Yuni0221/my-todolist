import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaUserEdit, FaUserPlus, FaCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import TodoListItem from "../components/TodoListItem";
import Weather from "../components/Weather";
import Date from "../components/Date";
import Chart from "../components/Chart";

export default function Main({ props }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  const [taskValue, setTaskValue] = useState({
    totalCompleted: 0,
    totalOngoing: 0,
  });

  const location = useLocation();
  const { name } = location.state.key;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setImageUrl(imageUrl);
      setImageFile(file);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="w-screen h-screen bg-Beige">
      <section className="flex justify-center items-center bg-Beige">
        <TodoListItem
          todo={todo}
          todos={todos}
          completedItems={completedItems}
          currentTab={currentTab}
          setTodo={setTodo}
          setTodos={setTodos}
          setCompletedItems={setCompletedItems}
          setCurrentTab={setCurrentTab}
          taskValue={taskValue}
          setTaskValue={setTaskValue}
        />
        <div className="h-[700px]">
          <div
            className={twMerge(
              `relative w-[460px] h-[220px] ml-4 flex justify-items-center items-center bg-Navy rounded-[40px]`
            )}
          >
            <div
              className={`flex w-[400px] justify-center items-center gap-[10px] absolute ml-6`}
            >
              <div
                className={twMerge(
                  `flex justify-center items-center w-[100px] h-[100px] bg-Beige rounded-full mr-6 overflow-auto`
                )}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Uploaded Image"
                    className="w-[100px] h-[100px] rounded-full shrink-0"
                  />
                ) : (
                  <div className="relative">
                    <input
                      id="userImage"
                      type="file"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label htmlFor="userImage" className="cursor-pointer">
                      <FaUserPlus
                        className="w-[30px] h-[30px] text-Gray"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                )}
              </div>
              <div className={`w-[160px] font-bold text-lg text-Beige`}>
                Welcome, {name} 님!
              </div>
              <div className="relative">
                <input
                  id="editImage"
                  type="file"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="editImage" className="cursor-pointer">
                  <FaUserEdit className="w-[30px] h-[30px] text-Beige" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex h-[400px] mt-4 ml-4 justify-start items-start">
            <div
              className={twMerge(
                `w-[220px] h-[220px] mr-5 bg-Blue rounded-[40px]`
              )}
            >
              <div className="flex flex-col mt-4 h-[220px] text-Beige font-bold">
                <Weather />
                <Date />
              </div>
            </div>
            <div
              className={twMerge(`w-[220px] h-[220px] bg-Blue rounded-[40px]`)}
            >
              <div className="flex items-center mt-4">
                <span className="ml-4 mr-2 text-Beige font-bold text-sm">
                  Ongoing
                </span>
                <FaCircle className="text-[#00bfff]" />
              </div>
              <div className="flex items-center">
                <span className="ml-4 mr-2 text-Beige font-bold text-sm">
                  Completed
                </span>
                <FaCircle className="text-[#f472b6]" />
              </div>

              <Chart
                totalCompleted={taskValue.totalCompleted}
                totalOngoing={taskValue.totalOngoing}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
