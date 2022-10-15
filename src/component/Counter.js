import React, { Component } from "react";

export default class Counter extends Component {
    state={count : 0} 
    render() {
       
       let increase=()=>{
        let newcount={count:this.state.count +1}
        this.setState(newcount);

       }
       let decrease=()=>{
        let newcount={count:this.state.count -1}
        {this.state.count <0 ? error():this.setState(newcount)}
        
       }
       function error(){
        return this
       }


        return (
            <div className="container p-5"style={{fontSize:'30px', color:'white'}}>
                <div className="container  p-5" style={{fontSize:'30px', color:'white'}}>
                    the guide to our site <br></br><br></br>
                    1 - it has home page that contain slider and some cards for our product <br></br>
                    2 - it has about page that tells us about our site and it has counter for fun <br></br>
                    3 - it has product page that contain products that we have<br></br>
                    4 - it has error page that when a link in the site doesn't work this link go to it and wait for some second and come back to home page<br></br>
                    5 - it has info page that show us the info of our product <br></br>  

                </div>
                <p>count is : {this.state.count}</p>

                <div>
                    <button className="btn d-f px-3 bg-primary" onClick={increase}>increase</button>
                    <button className="btn d-f px-3 bg-warning" onClick={decrease}>decrease</button>
                </div>
                <p>{this.state.count<0?"error positive only":""}</p>
            </div>
            
        );
    }
}