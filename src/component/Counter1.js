import React, { useEffect, useRef, useState, useContext } from "react";
import { CounterContext } from "../Countercontext/Countercontext";
export default function Counter1() {

    let dataFromContext = useContext(CounterContext)
    console.log(dataFromContext)


     let {counter,increase,decrease}=dataFromContext
    return (
        <div className="container fs-5 p-5">
            <p>count is : {counter} </p>

            <div className="d-flex gap-3">
                <button className="btn d-f px-3 bg-primary" onClick={increase} >increase</button>
                <button className="btn d-f px-3 bg-warning" onClick={decrease} >decrease</button>
            </div>

        </div>

    );

}