import React from "react";
import "tailwindcss/tailwind.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [issearch, setisSearch] = useState(false);

  return (
    <header className=" fixed top-0 left-0 z-[100] w-full p-1 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* left side */}
      <div className="flex">
        <IconButton
          sx={{
            color: "red",
          }}
        >
          <MenuIcon
            sx={{
              color: "green",
            }}
          />
        </IconButton>
        <h4
          className="text-sm font-bold pt-4 pl-3"
          style={{
            display:
              window.innerWidth < 640
                ? issearch
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
        >
          LearnS
        </h4>
        <div className="flex">
          <input
            style={{
              display:
                window.innerWidth < 640
                  ? issearch
                    ? "inline-block"
                    : "none"
                  : "inline-block",
            }}
            type="text"
            placeholder="Search"
            className=" hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
          />
          <IconButton onClick={() => setisSearch(true)}>
            <SearchIcon className="m-2 text-gray-900" />
          </IconButton>
        </div>
      </div>
      {/* right side */}
      <ShoppingCartOutlinedIcon className="mx-2" />
    </header>
  );
};

export default Header;
