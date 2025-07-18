import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [changeTheme, setChangeTheme] = useState(false);
  const [theme, setTheme] = useState("");
  useEffect(() => {
    
    if (changeTheme) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [changeTheme]);
  
  return (
    <div data-theme={theme}>
      <Navbar
        setChangeTheme={setChangeTheme}
        changeTheme={changeTheme}
      ></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
// className="bg-[#e8faf4]"
export default MainLayout;
