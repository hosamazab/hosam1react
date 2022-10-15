import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Error(){
    let Navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
          Navigate("/home");
        }, 3000); 
    
    
      }, []);
    
    return(
        <>
        <div  className="containerp-5 m-5" style={{height:"60vh",backgroundColor:'gold' ,width:"100%" ,color:"white", textAlign:'center',fontSize:'40px'}}>
            "this is error"
        </div>
        
        </>
    )
}