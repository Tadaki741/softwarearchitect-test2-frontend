import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import AddProduct from "./components/AddProduct";

function App() {

  return (
    <div>
      {/**Display a menu here and switching using router */}
      <AddProduct/>
    </div>
  );
}

export default App;
