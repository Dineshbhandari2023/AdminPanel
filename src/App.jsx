import { useState } from "react";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { MdDarkMode } from "react-icons/md";

function App() {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <div className={`${theme && "dark"}`}>
        <div className="flex h-screen bg-white dark:bg-black">
          <SideBar />
          <div className="flex flex-col flex-1">
            <button onClick={handleTheme}>
              <MdDarkMode className="absolute mx-9 my-3.5 size-4 dark:text-white dark:size-4 m-4" />
            </button>
            <TopBar />
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
