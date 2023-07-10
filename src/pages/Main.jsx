import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaUserEdit } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import TodoListItem from "../components/TodoListItem";
import Weather from "../components/Weather";

export default function Main({ props }) {
  const location = useLocation();
  const { name } = location.state.key;

  return (
    <section>
      <section className="w-screen h-screen flex justify-center items-center bg-Beige">
        <TodoListItem />
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
            >
              <Weather />
            </div>
            <div
              className={twMerge(`w-[220px] h-[220px] bg-Blue rounded-[40px]`)}
            ></div>
          </div>
        </div>
      </section>
    </section>
  );
}
