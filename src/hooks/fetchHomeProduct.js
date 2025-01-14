import { useState, useEffect } from "react";




const productList = [
  {
    id: 1,
    title: "Product 1",
    price: "$100",
    path: require("../../assets/images/f2.jpg"),
  },
  {
    id: 2,
    title: "Product 2",
    price: "$100",
    path: require("../../assets/images/f5.jpg"),
  },
  {
    id: 3,
    title: "Product 3",
    price: "$100",
    path: require("../../assets/images/f3.jpg"),
  },
  {
    id: 4,
    title: "Product 4",
    price: "$100",
    path: require("../../assets/images/f4.jpg"),
  },
  {
    id: 5,
    title: "Product 5",
    price: "$100",
    path: require("../../assets/images/f6.jpg"),
  },
];



const fetchHomeProduct = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const timer = new Promise((resolve) => {
        setTimeout(() => {
          resolve("product 1", "product 2", "product 3");
        }, 2000);
        return () => clearTimeout(timer);
      });
      const result = await timer;
      setData(productList);

      setIsLoading(false);
    } catch (e) {
      setError(e);
    } finally {
      // finally should be called when you catch error
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, error };
};

export default fetchHomeProduct;
