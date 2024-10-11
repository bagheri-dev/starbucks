import * as React from "react";
import { FaPlus , FaMinus } from "react-icons/fa6";
import { ICardProduct } from "../types/typeCardProduct";

export const CardProduct : React.FC<ICardProduct> = ({img, name, price, quantity, updateQuantity}) => {    
    const QuantityPlus = () => {updateQuantity(quantity + 1)}
    
    const QuantityMinus = () => {
        if (quantity > 0) {
            updateQuantity(quantity - 1)
        }
    }
    return ( 
        <div className="bg-[#1F3832] rounded-xl px-2 py-8 space-y-5">
            <div className="flex justify-center">
                <img className="w-56" src={img} alt={name} />
            </div>
            <h3 className="text-white text-2xl font-bold">{name}</h3>
            <p className="text-[#EBC99C] text-xl font-bold">${price}</p>
            <div className="flex items-center justify-center">
                <button className="bg-[#EBC99C] py-4 px-5" onClick={QuantityPlus}><FaPlus /></button>
                <p className="bg-white inline-block text-xl px-5 py-2">{quantity}</p>
                <button className="bg-[#EBC99C] py-4 px-5" onClick={QuantityMinus}><FaMinus /></button>
            </div>
        </div>
    );
}
 
export default CardProduct;