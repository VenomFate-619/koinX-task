import React from "react";
import logo from "@src/assets/logo.svg";
import searchIcon from "@src/assets/search.svg";
import hamburgerIcon from "@src/assets/hamburger.svg";
const NavBar = () => {
  return (
    <>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex  p-5 px-8 items-center md:justify-between">
        <img src={hamburgerIcon} alt="search" className="md:hidden mr-4" />
        <a class="flex title-font font-medium items-center text-gray-900">
          <img src={logo} alt="logo" />
          <span class="ml-3 text-xl font-bold">Crypto Tracker</span>
        </a>
        <div className="md:flex items-center gap-x-5 hidden">
          <img src={searchIcon} alt="search" />
          <img src={hamburgerIcon} alt="hamburger" />
        </div>
      </div>
    </header>
    <hr/>
    </>
  );
};

export default NavBar;
