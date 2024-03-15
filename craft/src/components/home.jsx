import React from "react";
import mtn from "../assets/kk.png";
import pencil from "../assets/pencil.png";
import kk from "../assets/kkk.png";
import parents from "../assets/Parents.png";
import hand from "../assets/Hand.png";
import valentine from "../assets/Valentine.png";
import bike from "../assets/bike.svg";
import smiley from "../assets/smiley-face.svg";
import brid from "../assets/brid.svg"

const Home=()=>{
    return(
        <>
        <div className="home-container">
            <div className="home-image">
            <img src={mtn} alt="" />
            <div className="home-text-carton">
                    <img src={pencil} alt="" className="pencil"/>
                    <img src={parents} alt="" className="parents"/>
                    <img src={valentine} alt="" className="valentine"/>
                    <img src={hand} alt="" className="hand"/>
                    <img src={bike} alt="" className="bike"/>
                    <img src={smiley} alt="" className="smiley"/>
                    <img src={brid} alt="" className="brid"/>
                </div>
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
            </div>
            </div>
            <div className="home-bottom">
                <div className="home-bottom-img">
                    <img src={kk} alt="" />
                </div>
                <div className="home-bottom-txt">
                    <h2><span>Holiday Course</span> Countdown</h2>
                    <p>Exciting learning adventures for festive seasons!</p>
                </div>
                <div className="home-bottom-date">
                    <div className="days">
                        <h1>69</h1>
                        <p>Days</p>
                    </div>
                    <p>:</p>
                    <div className="hours">
                        <h1>09</h1>
                        <p>hours</p>
                    </div>
                    <p>:</p>
                    <div className="minutes">
                        <h1>59</h1>
                        <p>minutes</p>
                    </div>
                    <p>:</p>
                    <div className="seconds">
                        <h1>60</h1>
                        <p>seconds</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home