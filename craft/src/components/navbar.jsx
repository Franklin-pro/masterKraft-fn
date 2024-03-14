import React from 'react';

function NavBar(){
    return (
        <>
            <div className='nav-container'>
            <div className='navbar'>
                <div className='logo'>
                    <img src='' alt='kraft'/>
                </div>

                <ul className='navlink'>
                    <li>
                        <a href='@' className='link'>Home</a>
                    </li>
                    <li>
                        <a href='@' className='link'>Toturial</a>
                    </li>
                    <li>
                        <a href='@' className='link'>The Box</a>
                    </li>
                    <li>
                        <a href='@' className='link'>about us</a>
                    </li>
                    <li>
                        <a href='@' className='link'>contact us</a>
                    </li>
                    <li>
                        <a href='@' className='link'>Sign-in</a>
                    </li>
                    <li>
                        <a href='@' className='link'>Sign-up</a>
                    </li>
                </ul>
            </div>
            </div>
        </>
    )
}
export default NavBar