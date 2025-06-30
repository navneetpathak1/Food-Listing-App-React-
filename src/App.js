import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css" 
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Footer } from "./components/footer";
import About from "./components/About";
import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Contact from "./components/Contact";
import Error from "./components/Error";
import Card from "./components/Card";
import Restaurant from "./components/Restaurant";

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};


const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/card",
        element: <Card/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:restId",
        element: <Restaurant />
      },
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRoute} />);
