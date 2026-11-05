import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = ({ showProducts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagenumber, setPageNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          name: "Watch",
          desc: "A smartWatch",
          price: "299",
          quantity: 1,
          manufacturer: "Samsung",
          img: "",
        },
        {
          name: "Bat",
          desc: "A smartWatch",
          price: "299",
          quantity: 4,
          manufacturer: "Samsung",
          img: "",
        },
        {
          name: "Phone",
          desc: "A smartWatch",
          price: "299",
          quantity: 1,
          manufacturer: "Samsung",
          img: "",
        },
        {
          name: "TV",
          desc: "A smartWatch",
          price: "299",
          quantity: 0,
          manufacturer: "Samsung",
          img: "",
        },
      ]);
      setLoading(false);
      console.log(localStorage.getItem("pagenumber"));
      console.log("mounting", products);
    }, 1000);

    return () => {
      console.log(localStorage.setItem("pagenumber", pagenumber));
      console.log(localStorage.getItem("pagenumber"));
      console.log("unmounting");
    };
  }, []);

  useEffect(() => {
    console.log(pagenumber, "api called");
    setLoading(true);
    setTimeout(() => {
      // setProducts()
      setLoading(false);
    }, 1000);
  }, [pagenumber]);
  useEffect(() => {
    return () => {
      console.log("page legt");
    };
  }, []);

  if (loading && showProducts) {
    return (
      <div>
        <p className="text-4xl">Loading.....</p>
      </div>
    );
  }

  return (
    <div>
      {showProducts && products.map((product) => <Card product={product} />)}
      <button type="button" onClick={() => setPageNumber(pagenumber - 1)}>
        prev
      </button>
      <p>{pagenumber}</p>
      <button type="button" onClick={() => setPageNumber(pagenumber + 1)}>
        next
      </button>
    </div>
  );
};

export default Products;
