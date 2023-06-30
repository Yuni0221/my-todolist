import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { GrFormAdd } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";

export default function Main(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

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
          <input
            className={twMerge(
              `w-[440px] h-[70px] bg-Beige rounded-[20px] mb-8 pl-6 outline-none`
            )}
          ></input>
          <button className="absolute w-[44px] h-[44px] ml-[340px] mb-11 bg-Blue rounded-full">
            <GrFormAdd className="w-[30px] h-[30px] ml-2" />
          </button>
        </div>
        <div className="h-[700px]">
          <div
            className={twMerge(
              `w-[460px] h-[220px] ml-4 flex items-center bg-Navy rounded-[40px]`
            )}
          >
            <div
              className={twMerge(
                `w-[100px] h-[100px] ml-14 bg-Beige rounded-full`
              )}
            ></div>
            <div>{props.setName}</div>
            <FaUserEdit className="w-[30px] h-[30px] ml-[250px] mt-[140px] text-Beige" />
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
