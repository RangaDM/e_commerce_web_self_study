import React from "react";
import MainContainer from "../../Layout/MainContainer";
import { IconButton } from "@mui/material";

const Category = () => {
  return (
    <MainContainer>
      <section
        style={{ boxShadow: "rgba( 0,0,0,0.24) 0px 3px 8px" }}
        className="w-full p-2"
      >
        <h1 className=" text-lg font-bold mt-2 ml-2 mb-3">
          Product Categories
        </h1>
        <div className="grid grid-cols-3 grid-rows-[auto] gap-5">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </section>
    </MainContainer>
  );
};

export default Category;

const CategoryItem = () => {
  return (
    <IconButton sx={{color:'red', padding:'1px', borderRadius:'6px'}}>
    <div className="w-full rounded-md flex flex-col items-center">
      <img
        src="https://lovelymeregis.co.uk/thumbs/Images/gallery/DSC_2474.jpg"
        alt="category item"
      />
      <h2> Category name</h2>
    </div>
    </IconButton>
  );
};
