import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import MPOInfo from "./MPOInfo";

function MaterialPurchaseOrder(props) {

  const [status, setStatus] = useState("");

  //For selected product to initiate the manufacturing order, this product is determined by the id inside the product array
  const [selectedProduct, setSelectedProduct] = useState("");

  //Retrieve the list of product for them to manufacture
  //we need this array to reference to the id from the product site
  //List to contain all the products from the database
  const [productNames, setProductNames] = useState([]);


  //This one for retrieving Manufacturing Order array
  const [materialPurchaseOrderList, setMaterialPurchaseOrderList] = useState([]);

  //Get all data to store inside the array
  const retrieveProductList = () => {
    //Call the api to get array data
    fetch("http://localhost:8080/product/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //Set the data
        setProductNames(data.data);
        console.log(productNames);
      })
      .catch((error) => console.error(error));
  };

  const refreshProductList = () => {
    //Clear the product list first
    setProductNames([]);
    //Get all data again
    retrieveProductList();
  };

  //Fetch the data on the first time
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:8080/mpo/all", requestOptions)
      .then((response) => response.json())
      .then((data) => setMaterialPurchaseOrderList(data.data));
  }, []);


  const getMaterialPurchaseOrderList = () => {
    fetch("http://localhost:8080/mpo/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //Set the data
        setMaterialPurchaseOrderList(data.data);
        console.log(materialPurchaseOrderList);
      })
      .catch((error) => console.error(error));

      //Reload the page
      window.location.reload();
  }

  const createMaterialPurchaseOrderSubmit = (
    status,
    selectedProdutID
  ) => {
    //Check for input satisfied or not
    if (
      status === "" ||
      selectedProduct === ""
    ) {
      window.alert("Please fill in all the field");
      return;
    } else {
      window.alert(
            "status: " +
          status +
          " selectedProductID: " +
          selectedProdutID
      );
      //Submit the data
      fetch("http://localhost:8080/mpo/add/" + selectedProdutID, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({
          status: status,
          product: null,
        }),
      })
        .then((response) => response.json())
        .then((response) => console.log(JSON.stringify(response.data)));
    }

    //Reload page
    window.location.reload();
  };

  return (
    <div>
      {/**Worker will input the client name, delivery date, complete date, start date, status */}
      <div className="text-center py-6 mb-5">
        <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-cyan-300 drop-shadow-lg">
          Material Purchase Order
        </h1>
      </div>

      <div className="flex flex-column mx-2 px-2">
        

        <div className="flex flex-col justify-center text-center mb-5 mx-auto md:w-1/3">
          Status:
          <Select
            options={[
              { value: "undone", label: "undone" },
              { value: "done", label: "done" },
            ]}
            onChange={(e) => setStatus(e.value)}
          />
        </div>

        {/**Select product from the Select, it will be determined by ID */}
        <div className="flex flex-col justify-center text-center mb-5 mx-auto md:w-1/3">
          Select product:
          <Select
            options={productNames.map((product) => ({
              value: product.id,

              label: product.name,
            }))}
            onChange={(e) => setSelectedProduct(e.value)}
          />
        </div>

        <div>
          <button
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => refreshProductList()}
          >
            Refresh product list
          </button>
        </div>

        <div>
          <button
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => getMaterialPurchaseOrderList()}
          >
            Refresh Material Purchase Order List
          </button>
        </div>

        <div>
          <button
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() =>
              createMaterialPurchaseOrderSubmit(
                status,
                selectedProduct
              )
            }
          >
            Create Material Purchase Order
          </button>
        </div>
      </div>

      {/**A section to list out all manufacturing order data */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {materialPurchaseOrderList &&
          materialPurchaseOrderList.length > 0 &&
          materialPurchaseOrderList.map((p, i) => (
            <MPOInfo
              key={i}
              mpo={p}
            />
          ))}
      </div>


    </div>
  );
}

export default MaterialPurchaseOrder;
