import React, { lazy, Suspense, useEffect, useState } from "react";
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
// import AnotherStore from "./components/AnotherStore";
import ShimmerUI from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";

const AnotherStore = lazy(() => import("./components/AnotherStore"));

const Page = () => {


  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "N P"
    }

    setUserName(data.name);
  },[])
  return (
    <Provider store={appStore} >
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="page">
      <Header />
      <main className="flex-grow container mx-auto px-4 pb-20 pt-8">
        <Outlet />
      </main>

      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
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
      {
        path: "/another",
        element: <Suspense fallback = {<ShimmerUI/>}><AnotherStore /></Suspense>
      },
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRoute} />);
