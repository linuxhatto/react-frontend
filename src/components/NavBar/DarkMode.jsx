import React from "react";
import LightButtom from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // access to html element

  // set theme to localStorage and html element
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme == "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        src={LightButtom}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 ${
          theme == "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        src={DarkButton}
        alt=""
        className={`w-12 cursor-pointer`}
      />
    </div>
  );
};

export default DarkMode;
