import * as React from "react"
import { ICardProductBill } from "../types/typeCardProductBill";

export const CardProductBill : React.FC<ICardProductBill> = ({img, name, price, quantity}) => {    
    return ( 
        <div className="bg-[#1F3832] rounded-xl px-2 py-8 space-y-5">
            <div className="flex justify-center">
                <img className="w-56" src={img} alt={name} />
            </div>
            <h3 className="text-white text-2xl font-bold">{name}</h3>
            <p className="text-[#EBC99C] text-xl font-bold">${price}</p>
            <div className="flex items-center">
                <p className="text-white inline-block text-xl px-1 py-2">Qty: {quantity}</p>
            </div>
        </div>
    );
}