import { useEffect, useState } from "react";
import { getStoredItem } from "../utilities/fakedb";

const useItems = (products) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItem = getStoredItem();
    const savedItem = [];
    const keys = Object.keys(storedItem);

    fetch("http://localhost:5000/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedItem) {
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedItem[id];
            addedProduct.quantity = quantity;
            savedItem.push(addedProduct);
          }
        }
        setItems(savedItem);
      });
  }, []);
  return [items, setItems];
};

export default useItems;
