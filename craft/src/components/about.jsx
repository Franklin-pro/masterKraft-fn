import React from "react";
import photo from "../assets/st.jpg";
import qt from "../assets/qt.png";

const About=()=>{
    return(<>
    <div className="about-container">
        <div className="about-all-content">
            <div className="about-content">
            <div className="about-content-left">
                <p>About us.</p>
                <p>Our team.</p>
                <p>press.</p>
            </div>
                <div className="about-content-right">
                    <h1>ABOUT US.</h1>
                    <p>In today's digital era, where screens often dominate
                       the attention of our children, MasterKraft offers a
                       refreshing departure from idle entertainment, serving
                       as a sanctuary for meaningful, productive activities.
                       Each MasterKraft box takes us on a journey of
                       exploration and creativity, equipping our children with
                       the necessary tools to craft, create, and broaden their
                       horizons. This experience not only nurtures their
                       cognitive and motor skills but also ignites their
                       curiosity, fostering a spirit of innovation.
                       <br></br>
                       <br></br>
                       More than just a box, MasterKraft represents an
                       enriching experience and a profound connection. It
                       becomes an opportunity for parents and children to
                       bond through the joy of creation, dream together, and
                       inspire one another. </p>
                </div>
            </div>
            <div className="about-image">
                <img src={photo} alt="" />
            </div>
            <div className="about-qoute">
                <div className="qoute-p">
                <p><i class="fa-solid fa-quote-left"></i>our work does make sense only if it is faithful witnessof his time
                <i class="fa-solid fa-quote-right"></i></p>
                </div>
               <div className="qoute-img">
               <img src={qt} alt="" />
               </div>
            </div>
            {/* <div className="about-team">
            <div className="team-img">
               <img src={qt} alt="" />
               <img src={qt} alt="" />
               <img src={qt} alt="" />
               </div>
                <div className="team-p">
                    <h1>THE TEAM.</h1>
                    <div className="team-start">

                    </div>
                </div>
               
            </div> */}
        </div>
    </div>
    </>)
}

export default About