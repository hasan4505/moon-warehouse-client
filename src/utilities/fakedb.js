// use local storage to manage cart data

const addToDb = (id) => {
  let productItems = {};

  //get the shopping cart from local storage
  const storedItems = localStorage.getItem("product-Items");
  if (storedItems) {
    productItems = JSON.parse(storedItems);
  }

  // add quantity
  const quantity = productItems[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    productItems[id] = newQuantity;
  } else {
    productItems[id] = 1;
  }
  localStorage.setItem("product-Items", JSON.stringify(productItems));
};

const getStoredItem = () => {
  let productItems = {};

  //get the shopping cart from local storage
  const storedItems = localStorage.getItem("product-Items");
  if (storedItems) {
    productItems = JSON.parse(storedItems);
  }
  return productItems;
};

const removeFromDb = (id) => {
  const storedItems = localStorage.getItem("product-Items");
  if (storedItems) {
    const productItems = JSON.parse(storedItems);
    if (id in productItems) {
      delete productItems[id];
      localStorage.setItem("product-Items", JSON.stringify(productItems));
    }
  }
};

const deleteProductItems = () => {
  localStorage.removeItem("product-Items");
};

export { addToDb, getStoredItem, removeFromDb, deleteProductItems };
