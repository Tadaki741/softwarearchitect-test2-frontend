import React, { useEffect, useState } from "react";
import Select from "react-select";
import ProductInfo from "./ProductInfo";


//This class is associated with Product.java in the backend


function AddProduct(props) {
  //For create new data and update
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  //Use for updating the product
  const [productID,setProductID] = useState("");
  

  //List to contain all the products from the database
  const [productNames, setProductNames] = useState([]);

  const submitData = (code, name, description, category, quantity, price) => {
    //Prepare the data

    //Send data
    fetch("http://localhost:8080/product/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({
        code: code,
        name: name,
        description: description,
        category: category,
        quantity: quantity,
        price: price,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response.data)));
  };

  const checkInputSubmit = (code,name,description,category,quantity,price) => {

    if (code === "" || name === "" || description === "") {
      window.alert("Please enter all field");
      return;
    } else {

      //Show notifications
      
      submitData(code, name, description, category, quantity, price);

      //Reload the page again
      window.location.reload();
    }
  };

  const checkInputUpdate = (code,name,description,category,quantity,price) => {
    //If all condition is good
    if (code === "" || name === "" || description === "" || category === "" || productID === "") {
      window.alert("please enter all the field");
      return;
    } else {
      //Ready to update
      updateData(code, name, description, category, quantity, price,productID);

      //Reload the page
      window.location.reload();
      
    }
  };

  const updateData = (code, name, description, category, quantity, price,productID) => {
      //Send data
    fetch("http://localhost:8080/product/" + productID + "/update", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({
        code: code,
        name: name,
        description: description,
        category: category,
        quantity: quantity,
        price: price,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response.data)));
  }

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
    
  }

  //Fetch the data on the first time
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:8080/product/all", requestOptions)
      .then((response) => response.json())
      .then((data) => setProductNames(data.data));
  }, []);

  return (
    <div className="App">
      <div className="text-center py-6 mb-5">
        <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-cyan-300 drop-shadow-lg">
          Phuong Hai Store Product
        </h1>
      </div>

      <div className="flex flex-column mx-2 px-2">
        <div>
          <label>
            Code:
            <input
              type="text"
              name="code"
              onChange={(e) => {
                setCode(e.currentTarget.value);
              }}
              placeholder={props.code}
            />
          </label>
        </div>

        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              placeholder={props.name}
            />
          </label>
        </div>

        <div>
          <label>
            Description:
            <input
              type="text"
              name="description"
              onChange={(e) => {
                setDescription(e.currentTarget.value);
              }}
              placeholder={props.description}
            />
          </label>
        </div>

        <div>
          <label>
            Category:
            <input
              type="text"
              name="category"
              onChange={(e) => {
                setCategory(e.currentTarget.value);
              }}
              placeholder={props.category}
            />
          </label>
        </div>

        <div>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              onInputCapture={(e) => {
                setQuantity(e.currentTarget.value);
              }}
              placeholder={props.quantity}
            />
          </label>
        </div>

        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              onInputCapture={(e) => {
                setPrice(e.currentTarget.value);
              }}
              placeholder={props.price}
            />
          </label>
        </div>

        <div>
          <button
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() =>
              checkInputSubmit(
                code,
                name,
                description,
                category,
                quantity,
                price
              )
            }
          >
            Add product
          </button>
        </div>

        <div>
          <button
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() =>
              checkInputUpdate(
                code,
                name,
                description,
                category,
                quantity,
                price,
                productID
              )
            }
          >
            Update product
          </button>
        </div>


        <div>
          <button
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() =>
              refreshProductList()
            }
          >
            Refresh list
          </button>
        </div>

        <div className="flex flex-col justify-center text-center mb-5 mx-auto md:w-1/3">
          <Select
            options={productNames.map((product) => ({
              value: product.id,
              
              label: product.name,
            }))}
            onChange={(e) => setProductID(e.value) }
          />
        </div>
      </div>




      {/**A section to list out all data */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {productNames &&
          productNames.length > 0 &&
          productNames.map((p, i) => <ProductInfo key={i} product={p} callBackFunction = {() => refreshProductList()}/>)}
      </div>



    </div>
  );
}

export default AddProduct;
