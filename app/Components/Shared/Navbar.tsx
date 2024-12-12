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

