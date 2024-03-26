import React from "react";

const ContactPage=()=>{
    return(
        <>
        <div className="contactPage-container">
            <h1>GET IN TOUCH</h1> 
            <div className="contactPage-content">
                <div className="content-first">
                <i class='bx bx-location-plus'></i>
                <h2>ADDRESS</h2>
                <p>RWANDA-Kigali-Gasabo</p>
                </div>
                <div className="content-first">
                <i class='bx bxs-phone'></i>
                <h2>PHONE</h2>
                <p>+250 788-093-456</p>
                </div>
                <div className="content-first">
                <i class='bx bxs-comment-dots'></i>
                <h2>MESSAGE</h2>
                <p>E-Mail: mastKraft@gmail.com</p>
                <p>Whatsapp: 0789886546</p>
                </div>
                </div>  
        </div>
        </>
    )
}
export default ContactPage