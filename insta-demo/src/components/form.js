import React from "react";
import { Link } from "react-router-dom";
import './form.css';


export default function Form(){
    return(
        <div id="form-container">
           
            <form method="POST">
           <div><input type='text' placeholder="No File Chosen"/> <input type="file" /></div>
           <div><input type='text' placeholder="Auther"/> <input type='text' placeholder="Location"/></div> 
           <div> <input type='text' placeholder="Descripption"/></div>
           <div><Link to="/postview"><button id="post-btn">POST</button></Link></div>
            </form>
        </div>
    )
}