import {Example} from './Example.css'
import axios from 'axios';
import Card from "./Card";

import React, { Component, useEffect, useState } from "react";
export default function Examples() {
  useEffect(() => {
    
    getcards();
  }, []);
  let getcards= async () => {
    
    
    let card = await axios.get("https://api.escuelajs.co/api/v1/products?offset=20&limit=20")

    setCards(card.data)
  };
  let [Cards,setCards]=useState([])
    // let =
    //        [{title:"card #1",description:"Description #1 ",instock:20,img:""},
    //         {title:"card #2",description:"Description #2 ",instock:20,img:"https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"},
    //         {title:"card #3",description:"Description #3 ",instock:20,img:"https://i.pinimg.com/564x/a5/2e/3e/a52e3ead549f0fef288d9d074b979df2--computer.jpg"},
    //         {title:"card #4",description:"Description #4 ",instock:20,img:"https://png.pngtree.com/background/20210712/original/pngtree-abstract-modern-neon-frame-background-picture-image_1178251.jpg"},
    //         {title:"card #5",description:"Description #5 ",instock:20,img:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"},
    //         {title:"card #6",description:"Description #6 ",instock:20,img:"https://i.pinimg.com/550x/94/fb/9e/94fb9e94f0db7e3d429df2d9c64527d2.jpg"},
    //         {title:"card #6",description:"Description #6 ",instock:20,img:"https://i.pinimg.com/550x/94/fb/9e/94fb9e94f0db7e3d429df2d9c64527d2.jpg"},
    //         {title:"card #6",description:"Description #6 ",instock:0,img:"https://i.pinimg.com/550x/94/fb/9e/94fb9e94f0db7e3d429df2d9c64527d2.jpg"},]
    return (
      
      <div className="d-flex justify-content-center container py-5 gap-4 flex-wrap">
        {
          Cards.map((card,index)=><Card title={card.title} id={card.id} price={card.price}  description={card.description} images={card.images} instock={card.instock} key={index}/> )
        
        }
        
      </div>
      
      
    );
      
    }
    
  
 