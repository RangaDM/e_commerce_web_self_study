import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import User from "../pages/User";
import Login from "../pages/Login";
import UserProtected from "./UserProtected";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route element={<UserProtected/>}>
            <Route path="user" element={<User/>} />
          </Route>
        </Route>
          <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
