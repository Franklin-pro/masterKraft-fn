import React from 'react';
import aim from '../assets/wek.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
function NavBar(){
    const[isMobile,setIsMobile]= useState(false);
    return (
        <>
        <nav>
        <div className='nav-container'>
            <div className='navbar'>
                <div className='logo'>
                    <img src={aim} alt='kraft'/>
                </div>

                <ul className={isMobile?'openNav':'navlink'}
                    onClick={()=>setIsMobile(false)}>
                    <li>
                        <a href='@' className='link'>Home</a>
                    </li>
                    <li>
                        <a href='./toturial' className='link'>Learn</a>
                    </li>
                    <li>
                        <a href='./tools' className='link'>The Box</a>
                    </li>
                    <li>
                        <a href='@' className='link'>about us</a>
                    </li>
                    <li>
                        <a href='@' className='link'>contact us</a>
                    </li>
                    <li>
                        <a href='@' className='link btn in'>Sign-up</a>
                    </li>
                    <li>
                        <a href='@' className='link btn up'>log in</a>
                    </li>
                </ul>
                <MenuIcon className="menu" onClick = {()=>setIsMobile(!isMobile)} />
            </div>
            </div>
        </nav>
           
        </>
    )
}
export default NavBar