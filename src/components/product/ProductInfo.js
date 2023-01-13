//This class is used within the AddProduct.js
function ProductInfo({ product }, callBackFunction) {

  //This is a child class used by a parent class AddProduct.js
  //const [productID, setProductiD] = useState("");
  const deleteProduct = () => {
    //Get the id
    const id = product.id;
    //Call the api
    fetch("http://localhost:8080/product/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // second step
      .then((data) => {
        
      })
      .catch((error) => console.error(error));
    

      //Alert the Parent component to refresh the list
      //callBackFunction();
      window.location.reload();

  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => deleteProduct()}
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {product.name}
        </h5>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          id: {product.id}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {product.description}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          quantity: {product.quantity}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          category: {product.category}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          code: {product.code}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          price: {product.price} $
        </span>

        <div className="flex mt-4 space-x-3 md:mt-6"></div>
      </div>
    </div>
  );
}

export default ProductInfo;
