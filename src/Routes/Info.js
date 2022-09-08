import Examples from "../component/Examples"
import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { Component, useEffect, useState } from "react";

export default function Info (props) {
  
        const {id} = useParams()
        console.log(id);

            useEffect(() => {  
              getcards();
            }, []);

            let getcards= async () => {
              let card = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
              setCards(card.data)
            };
            let [Cards,setCards]=useState([])

        return (

            <div className="container my-5 p-5" 
            style={{fontSize:'20px', color:'black', borderRadius:'10%', backgroundColor:'Gold',width:'500px'}}>

                <div> title : {Cards.title} </div><br></br>
                <div> info  : {Cards.description}</div><br></br>
                <div> price : {Cards.price}  $</div><br></br>
                <div> photo : <img src={Cards.images} style={{ width: "18rem", height: "18rem",borderRadius:'50%' }} /></div>

            </div>

        )
    
}