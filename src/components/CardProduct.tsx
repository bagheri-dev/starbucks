import * as React from "react";
import { data } from "../data/data";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const CardProduct : React.FC = () => {
    console.log(data);
    
    return ( 
        <>
        {data.map((props) => {
            <div>
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
            <div>
                <button><FaPlus /></button>
                <span>{props.quantity}</span>
                <button><FaMinus /></button>
            </div>
        </div>
        })}    
        </>
     );
}
 
export default CardProduct;