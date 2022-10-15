import { Example } from './Example.css'
import { increase } from '../Redux/Count';
import { Card, Button } from "react-bootstrap";
import React, { useEffect, useRef, useState, useContext } from "react";
import { CounterContext } from "../Countercontext/Countercontext";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom"

 export function Asd(props){
  console.log(props.id)

}

export default function Card1(props) {
  let dispatch = useDispatch();
  let increase1 = () => {
    dispatch(increase());
  };
  let navClass = (object) => {
    return `nav-link ${object.isActive && "text-white bg-primary"}`;
  };
 
  let { title, description, images, instock, price,id } = props;
   
  
  
  return (
    props.title && (
      <Card style={{ width: "18rem", backgroundColor:'gray' }}>
        <Card.Img
          variant="top"
          style={{borderRadius:'50%' }}
          src={props.images ? images : "https://api.lorem.space/image/watch?w=640&h=480&r=9918"}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>price : {price} $</Card.Text>
          
        </Card.Body>
        {props.children}
        
        {
            <NavLink to={`/info/${id}`} className={navClass} style={{margin:"15px"}}>
              <Button style={{width:"150px",margin:"15px"}} variant={id ? "primary" : "danger"} >
              {/* <a style={{background:'primary', color:"black",textTransform:"capitalize"}} href= {`https://api.escuelajs.co/api/v1/products/${id}`}>  show card info</a> */}
              show card info</Button>
               </NavLink>
          }
        <button className="btn d-f px-3 bg-primary m-1" onClick={increase1}  >ADD ME</button>
          
      </Card>
      
    )
    
    );


}