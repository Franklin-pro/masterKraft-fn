import React from "react";
import mtn from "../assets/kk.png";
import pencil from "../assets/pencil.png";
import notbook from "../assets/Notebook.png";
import parents from "../assets/Parents.png";
import hand from "../assets/Hand.png";
import valentine from "../assets/Valentine.png";

const Home=()=>{
    return(
        <>
        <div className="home-container">
            <div className="home-image">
            <img src={mtn} alt="" />
            <div className="home-text">
                <div className="home-text-text">
                    <p className="p-one">Ignite the Spark of Imagination:</p>
                    <p className="p-two"><span>MasterKraft's</span> Secrets to</p>
                    <p className="p-three">Nurturing <span>Young Talent</span> and</p>
                    <p className="p-four">Cultivating Lifelong Skills for a</p>
                    <p className="p-five"><span>Bright and</span> Exciting Future.</p>
                    <div className="btn">
                    <button>EXPLORE THE BOX</button>
                    </div>
                </div>
                <div className="home-text-carton">
                    <img src={pencil} alt="" />
                    <img src={parents} alt="" />
                    <img src={valentine} alt="" />
                    <img src={hand} alt="" />
                    <img src={notbook} alt="" />
                </div>
            </div>
            </div>
           
            <div className="home-page">
            </div>
        </div>
        </>
    )
}

export default Home