import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import User from "../pages/User";
import Login from "../pages/Login";
import UserProtected from "./UserProtected";
import Category from "../pages/category/Category";
import CategoryItems from "../pages/CategoryItems/CategoryItems";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route element={<UserProtected />}>
            <Route path="profile" element={<User />} />
          </Route>
            <Route path="category" >
              <Route index element={<Category />} />
              <Route path=":categoryID" element={<CategoryItems />} />
            </Route>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
