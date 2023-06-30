import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage.jsx";
import Main from "./pages/Main.jsx";
import "./tailwind.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
