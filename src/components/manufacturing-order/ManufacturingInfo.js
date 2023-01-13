function ManufacturingInfo({ mo }) {



    //Once completed, the front end will send delete request to the back end, then the backend wil reduce the amount of that product
  const completeOrderButtonSubmit = () => {
    const mo_id = mo.id;
    fetch("http://localhost:8080/mo/" + mo_id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // second step
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
    

      //Alert the Parent component to refresh the list
      //callBackFunction();
      window.location.reload();
  };

  return (
    <div className="block max-w-sm p-6 text-white bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h2>order id: {mo.id}</h2>
      <h2>client name: {mo.clientName}</h2>
      <h2>product name: {mo.product.name}</h2>
      <h2>product id: {mo.product.id}</h2>
      <div className="flex justify-end px-4 pt-4">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          onClick={() => completeOrderButtonSubmit()}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default ManufacturingInfo;
