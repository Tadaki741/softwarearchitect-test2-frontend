import "./App.css";
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
