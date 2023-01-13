import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AddProduct from "./product/AddProduct";
import ManufacturingOrder from "./manufacturing-order/ManufacturingOrder";
import BillOfMaterial from "./bill-of-material/BillOfMaterial";
import MaterialPurchaseOrder from "./material-purchase-order/MaterialPurchaseOrder";



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              RMIT - SOFTWARE ARCHITECTURE - TEST 2
            </span>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">


              <li className="nav-item">
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link to="/products">Product</Link>
                </button>
              </li>

              

              <li className="nav-item">
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link to="/product-order">Product Order</Link>
                </button>
              </li>

              <li className="nav-item">
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link to="/manufacturing-order">Manufacturing Order</Link>
                </button>
              </li>


              <li className="nav-item">
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link to="/bill-of-material">Bill of Material</Link>
                </button>
              </li>

              <li className="nav-item">
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  <Link to="/material-purchase-order">Material Purchase Order</Link>
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/**Nav bar to go to other pages */}
      <Routes>
        <Route path="/products" element={<AddProduct/>} />
        <Route path="/manufacturing-order" element={<ManufacturingOrder/>}/>
        <Route path="/bill-of-material" element={<BillOfMaterial/>}/>
        <Route path="/material-purchase-order" element={<MaterialPurchaseOrder/>}  />
      </Routes>
    </>
  );
}