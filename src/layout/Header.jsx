import React from "react";
import { Link } from "react-router-dom";
import { BiFootball } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { SiGooglenews } from "react-icons/si";
import { IconContext } from "react-icons";
export default function Header() {
  return (
    <header>
      <div className="headerName">
        <IconContext.Provider value={{ size: "27px" }}>
          <SiGooglenews />
        </IconContext.Provider>
        <Link to="/">
          <span>TotalFootball</span>
        </Link>
      </div>
      <div>
        <IconContext.Provider value={{ size: "27px" }}>
          <BiFootball />
        </IconContext.Provider>
        <Link to="/">
          <span>Live Football</span>
        </Link>
      </div>
      <div>
        <IconContext.Provider value={{ size: "27px" }}>
          <BsNewspaper />
        </IconContext.Provider>
        <Link to="/news">
          <span>News</span>
        </Link>
      </div>
    </header>
  );
}
