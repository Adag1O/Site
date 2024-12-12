"use client"

import { useState } from "react";
import { Home } from "../Special/Links";
import { Sun, Moon, Calendar, UserLogOut} from "../Icons/Theme";
import { SearchBar } from "../Special/Search";
import Link from "next/link";


function ThemeButton() {
  const [Theme, setTheme] = useState(true);

  function ToggleTheme() {
    setTheme(!Theme); // Corrected toggle logic
  }

  return (
    <button onClick={ToggleTheme} className="">
      {Theme ? <Sun /> : <Moon />} {/* Display Sun icon for light mode and Moon for dark mode */}
    </button>
  );
}


function Cart() {

  function OpenCart() {

  }

  return (
    <button onClick={OpenCart} className="">

<svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
</svg>


    </button>
  );
}


import React from "react";

export default function Navbar({children,calendar = false,searchbar = false, Logout = false}: Readonly<{ children: React.ReactNode , calendar?: boolean, searchbar ?: boolean, Logout?: boolean }>) {
  return (
    <nav className="h-[10vh] flex items-center justify-around w-full bg-slate-50 z-10">
      <Home />
      <div className="flex gap-4">{children}</div>
      <div className="flex items-center justify-center gap-5">
        <ThemeButton />
        {searchbar && <SearchBar/>}
        {calendar && <Link href=""><Calendar/></Link>}
        {Logout && <Link href=""><UserLogOut/></Link> }
      </div>
    </nav>
  );
}

