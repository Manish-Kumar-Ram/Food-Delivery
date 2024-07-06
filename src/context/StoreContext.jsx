import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null);

const StoreContextProvider = ({children}) => {
    const[cartitems,setcartitems]=useState({});
    const [discount, setDiscount] = useState(0);
    const addtocart=(itemId)=>{
      if(!cartitems[itemId]){
        setcartitems((prev)=>({...prev,[itemId]:1}))
      }
      else{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

      }
    }
    const removerfromcart=(itemId)=>{
 setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
   const gettoalcartAmpunt=()=>{
    let totalmaount=0;
    for(const item in cartitems){
      if(cartitems[item]>0){

        let iteminfo=food_list.find((product)=>product._id===item)
        totalmaount+=iteminfo.price*cartitems[item]
      }
    }
    return totalmaount;
   }
    const contextValue = {
        food_list,
        cartitems,
        setcartitems,addtocart,removerfromcart,gettoalcartAmpunt,discount,
        setDiscount,
    };

    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    );
};

export default StoreContextProvider;
