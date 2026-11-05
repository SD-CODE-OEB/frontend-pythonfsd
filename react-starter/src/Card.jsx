import { useState } from "react";
import { YourButton } from "./Mybutton";

function Card(props) {
  const { product } = props;
  const [count, changeCount] = useState(product.quantity);
  // const product = [
  //   {
  //     name: "Watch",
  //     desc: "A smartWatch",
  //     price: "299",
  //     quantity: "1",
  //     manufacturer: "Samsung",
  //     img: "",
  //   },
  //   {
  //     name: "Watch",
  //     desc: "A smartWatch",
  //     price: "299",
  //     quantity: "1",
  //     manufacturer: "Samsung",
  //     img: "",
  //   },
  //   {
  //     name: "Watch",
  //     desc: "A smartWatch",
  //     price: "299",
  //     quantity: "1",
  //     manufacturer: "Samsung",
  //     img: "",
  //   },
  // ];
  function adToCart(name) {
    console.log("added to cart", name);
  }

  function increment() {
    changeCount(count + 1);
    console.log(count);
  }

  function decrement() {
    changeCount(count - 1);
    console.log(count);
  }

  return (
    <div className="flex flex-col justify-between border border-gray-200 rounded-lg shadow-sm w-56 p-4 m-3 bg-white">
      <div className="space-y-1 text-sm">
        <p className="font-semibold text-base text-gray-800">
          {props.product.name || "Product Name"}
        </p>
        <p className="text-gray-500 text-xs">
          {product.desc || "Product description"}
        </p>
        <p className="text-gray-900 font-bold">{product.price || "$0.00"}</p>
        <p className="text-xs text-gray-500">Qty: {product.quantity || "1"}</p>
        <p className="text-xs text-gray-400">
          {product.manufacturer || "Manufacturer"}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4 pt-2 border-t border-gray-100">
        <div className="flex gap-2">
          <button
            type="button"
            className="flex-1 py-1.5 px-3 text-xs font-medium text-gray-700 bg-gray-100 rounded border border-gray-300 sm:hover:bg-gray-200 transition-colors cursor-pointer active:scale-95"
            onClick={() => decrement()}
          >
            -
          </button>
          <span>{count}</span>
          <button
            type="button"
            className="flex-1 py-1.5 px-3 text-xs font-medium text-gray-700 bg-gray-100 rounded border border-gray-300 sm:hover:bg-gray-200 transition-colors cursor-pointer active:scale-95"
            onClick={() => increment()}
          >
            +
          </button>
        </div>
        <YourButton
          text={"Add to cart"}
          onClickFunc={() => adToCart(product.name)}
        />
      </div>
    </div>
  );
}

export default Card;
