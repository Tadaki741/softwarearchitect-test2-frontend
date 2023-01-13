function MPOInfo({ mpo }) {
  //Once completed, the product quantity will increase
  const completeMaterialPurchaseOrderSubmit = () => {
    const mpo_id = mpo.id;
    fetch("http://localhost:8080/mpo/" + mpo_id, {
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
    <div>
      <div className="block max-w-sm p-6 text-white bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2>mpo id: {mpo.id}</h2>
        <h2>product name: {mpo.product.name}</h2>
        <h2>status: {mpo.status}</h2>
        <h2>product id: {mpo.product.id}</h2>
        <div className="flex justify-end px-4 pt-4">
          <button
            type="button"
            className="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
            onClick={() => completeMaterialPurchaseOrderSubmit()}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default MPOInfo;
