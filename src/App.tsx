import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardProduct from "./components/CardProduct";
import { CardProductBill } from "./components/CardProductBill";
import Header from "./components/Header";
import { data } from "./data/data";
import { Quantities } from "./types/types";

function App() {
  const [quantities, setQuantities] = useState<Quantities>(
    data.reduce(
      (acc, product) => ({ ...acc, [product.name]: product.quantity }),
      {}
    )
  );
  const updateQuantity = (name: string, newQuantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: newQuantity,
    }));
  };
  const totalAmount = data.reduce((total, product) => {
    return total + product.price * quantities[product.name];
  }, 0);
  const notify = () => toast("Your order is successful✅");
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 px-2 sm:grid-cols-2 gap-3 container mx-auto">
        {data.map((product) => {
          return (
            <CardProduct
              key={product.name}
              img={product.img}
              name={product.name}
              price={product.price}
              quantity={quantities[product.name]}
              updateQuantity={(newQuantity) =>
                updateQuantity(product.name, newQuantity)
              }
            />
          );
        })}
      </div>
      <div className="py-5 text-xl text-center font-bold">
        <h2>Bill</h2>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 px-2 sm:grid-cols-2 gap-3 container mx-auto">
        {data.map((product) => {
          return (
            <CardProductBill
              key={product.name}
              img={product.img}
              name={product.name}
              price={product.price}
              quantity={quantities[product.name]}
            />
          );
        })}
      </div>
      <div className="py-5 text-3xl font-bold text-center">
        <h2>Total : ${totalAmount}</h2>
      </div>
      <div className="bg-[#EAC9A0] py-4 text-white text-2xl text-center container mx-auto rounded-xl font-bold">
        <button
          className="w-full h-full"
          disabled={totalAmount === 0}
          onClick={notify}
        >
          Submit Order
        </button>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
