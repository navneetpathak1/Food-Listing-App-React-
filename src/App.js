import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css" 
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Footer } from "./components/footer";


const Page = () => {
  return (
    <div className="page">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
