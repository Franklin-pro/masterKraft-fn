import React from "react";
import Toturial from "./toturial";
import learn from '../assets/learn.json'
import logan from '../assets/logan.mp4';
import temp from '../assets/temp2.png'
import NavBar from "./navbar";
import Footer from "./footer";

function Learn(){
    return (
        <>
        <NavBar/>
        <div className="videos">
           {learn ? (learn.map((learnx)=>(
         
            <Toturial proff={learnx.name} course={learnx.description} video= {logan} youtube = {learnx.youtube}/> 

           

           
    ))):(
        <p>Loading...</p>
    )}
    </div>
    <div className="did">
            <div className="you">
            <div className="images">
                <img src={temp} alt="tempz"/>
            </div>
            <div className="content">
            {learn ? (learn.map((learnx)=>(
         <p>{learnx.dids}</p>

        

        
 ))):(
     <p>Loading...</p>
 )}
            </div>
           
            </div>
            
            </div>
            <Footer/>
        </>
    )
}
export default Learn