import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
          <Navbar></Navbar>
        </BrowserRouter>
    </div>
  );
}

export default App;
