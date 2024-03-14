import React from 'react';
// import aim from '../assets/wekraft.jpeg'
function NavBar(){
    return (
        <>
        <nav>
        <div className='nav-container'>
            <div className='navbar'>
                <div className='logo'>
                    {/* <img src={aim} alt='kraft'/> */}
                    <h1>wekraft</h1>
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
                        <a href='@' className='link btn in'>Sign-in</a>
                    </li>
                    <li>
                        <a href='@' className='link btn up'>Sign-up</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
           
        </>
    )
}
export default NavBar