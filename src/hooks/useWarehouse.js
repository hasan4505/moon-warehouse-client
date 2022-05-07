import { useEffect, useState } from "react";

const useWarehouse = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useWarehouse;