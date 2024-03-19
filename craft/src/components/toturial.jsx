import React from "react";
import Card from '../components/card';
import toturial from '../assets/comment.json'
import NavBar from "./navbar";


function Toturial(){
return (
    <>
    <NavBar/>
           <div className="tot">
       { toturial ? ( toturial.map((sponsorx)=>(
        <Card desc={sponsorx.description} photo={sponsorx.newsImage} name = {sponsorx.teacher} youtube= {sponsorx.youtube} titles = 'go to learn this course on  youtube'/>
    ))):(
        <p>Loading...</p>
    )}
    </div>
    </>
)
}
export default Toturial