import React from "react";

const HomePropos=(propos)=>{
    console.log(propos);
    return(
        <>
        <div className="home-propos-container">
            <img src={propos.photo} alt="" />
        </div>
        </>
    )
}
export default HomePropos