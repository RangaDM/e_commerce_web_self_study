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
    <header className=" fixed top-0 left-0 z-[100] w-full p-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* left side */}
      <div className=" flex items-center">
        <IconButton sx={{ color: "red" }}>
          <MenuIcon
            sx={{
              color: "#c82196",
            }}
          />
        </IconButton>
        <h1
          style={{
            display:
              window.innerWidth < 640
                ? issearch
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
          className=" ml-2 text-m font-bold"
        >
          Learn <span className=" text-[#c82196]">S</span>
        </h1>
        <div
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? issearch
                  ? "#fdf3f3"
                  : "inherit"
                : "#fdf3f3",
          }}
          className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]"
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              display:
                window.innerWidth < 640
                  ? issearch
                    ? "inline-block"
                    : "none"
                  : "inline-block",
              transition: "all 400ms ease-in-out",
            }}
            className=" hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
          />
          <IconButton onClick={() => setisSearch(true)}>
            <SearchIcon className="m-2 text-gray-900" />
          </IconButton>
        </div>
      </div>

      {/* right side */}
      <IconButton>
        <div className=" relative p-1">
          <ShoppingCartOutlinedIcon className=" text-black" />
          <div className=" absolute top-[2px] right-0 text-[7px] font-semibold text-white bg-black flex items-center justify-center w-3 h-3 rounded-full">
            2
          </div>
        </div>
      </IconButton>
    </header>
  );
};

export default Header;
