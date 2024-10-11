import { useState } from "react";
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
  const updateQuantity = (name : string, newQuantity : number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: newQuantity,
    }));
  };
  const totalAmount = data.reduce((total, product) => {
    return total + product.price * quantities[product.name];
  }, 0);

  return (
    <>
      <Header />
      <div className="grid grid-cols-5 gap-3 container mx-auto">
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
      <div className="grid grid-cols-5 gap-3 container mx-auto">
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
        <h2>Total : ${totalAmount.toFixed(2)}</h2>
      </div>
    </>
  );
}

export default App;
