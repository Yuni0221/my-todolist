import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsCalendar2Heart } from "react-icons/bs";

export default function StartPage() {
  const navigate = useNavigate();
  const [showGreeting, setShowGreeting] = useState(false);
  const [showNameQuestion, setShowNameQuestion] = useState(false);
  const [name, setName] = useState("");

  setTimeout(() => {
    setShowGreeting(true);
  }, 700);

  setTimeout(() => {
    setShowNameQuestion(true);
  }, 1600);

  const handleName = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      navigate("/main", { state: { key: { name } } });
    }
  };

  const handleButtonClick = () => {
    navigate("/main", { state: { key: { name } } });
  };

  return (
    <section>
      <div className="w-screen h-screen relative bg-Beige">
        <div className={twMerge(`flex items-center ml-[80px]`)}>
          <BsCalendar2Heart
            className={twMerge(`w-[46px] h-[46px] mt-[50px] mr-[10px]`)}
          />
          <span className={twMerge(`text-5xl font-bold mt-[50px]`)}>
            To-do List!!
          </span>
        </div>
        <div
          className={twMerge(
            `w-[260px] h-[120px] absolute ml-[80px] mt-[50px] bg-DarkBeige rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] flex items-center ${
              showGreeting ? "" : "hidden"
            }`
          )}
        >
          <span className={twMerge(`text-2xl ml-[20px]`)}>Hi! 🙋🏻‍♀️</span>
        </div>
        <div
          className={twMerge(
            `w-[340px] h-[120px] absolute ml-[80px] mt-[180px] bg-DarkBeige rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] flex items-center ${
              showNameQuestion ? "" : "hidden"
            }`
          )}
        >
          <span className={twMerge(`text-2xl ml-[20px]`)}>
            What is your name?
          </span>
        </div>
        <div
          className={twMerge(
            `w-[400px] h-[120px] absolute right-[80px] bottom-[100px]`
          )}
        >
          <input
            className={twMerge(
              `w-[400px] h-[120px] bg-DarkBeige rounded-[40px] text-2xl pl-6 outline-none`
            )}
            value={name}
            onChange={handleName}
            onKeyPress={handleEnterPress}
          ></input>
          <button
            type="submit"
            className={twMerge(
              `w-[60px] h-[60px] absolute right-[40px] top-[30px] bg-Navy rounded-full`
            )}
            onClick={handleButtonClick}
          >
            <FaRegPaperPlane className={twMerge(`w-7 h-7 text-Beige ml-3`)} />
          </button>
        </div>
      </div>
    </section>
  );
}
