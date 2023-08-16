import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "../components/styles/App.css";
import CommonButton from "../components/commonButton";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <div className="flex items-center justfiy-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      Hello there...
      <CommonButton width="">
        <Link to="/login">Let's Go!!!</Link>
      </CommonButton>
      <CommonButton
        width=""
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Count is {count}
      </CommonButton>
    </div>
  );
}

export default App;
