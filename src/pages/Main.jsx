import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { GrFormAdd } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import TodoListItem from "../components/TodoListItem";

export default function Main({ props }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

  const location = useLocation();
  const { name } = location.state.key;

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setShowText(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowText(false);
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <section>
      <section className="w-screen h-screen flex justify-center items-center bg-Beige">
        <div className={twMerge("mb-[480px]")}>
          <div
            className={twMerge(
              "relative w-[30px] h-[50px] rounded-tl-2xl bg-Navy mb-1",
              isHovered
                ? "transition-width duration-300 delay-100 -ml-[130px] w-[160px]"
                : "transition-width duration-300"
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showText && (
              <p className="text-sm text-Beige pt-3 pl-6">Ongoing task🧘🏻‍♀️</p>
            )}
          </div>
          <div
            className={twMerge(
              "relative w-[30px] h-[50px] rounded-bl-2xl bg-Navy",
              isHovered
                ? "transition-width duration-300 delay-100 -ml-[130px] w-[160px]"
                : "transition-width duration-300"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {showText && (
              <p className="text-sm text-Beige pt-3 pl-6">Completed task🐰</p>
            )}
          </div>
        </div>

        <div
          className={twMerge(
            `w-[500px] h-[700px] flex justify-center items-end bg-DarkBeige mr-4 rounded-[40px]`
          )}
        >
          <TodoListItem />
        </div>
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
                  `flex w-[100px] h-[100px] bg-Beige rounded-full mr-6`
                )}
              ></div>
              <div className={`w-[160px] font-bold text-lg text-Beige`}>
                Welcome, {name} 님!
              </div>
              <FaUserEdit className="w-[30px] h-[30px] text-Beige" />
            </div>
          </div>
          <div className="flex h-[700px] mt-4 ml-4 justify-start items-start">
            <div
              className={twMerge(
                `w-[220px] h-[220px] mr-5 bg-Blue rounded-[40px]`
              )}
            ></div>
            <div
              className={twMerge(`w-[220px] h-[220px] bg-Blue rounded-[40px]`)}
            ></div>
          </div>
        </div>
      </section>
    </section>
  );
}
