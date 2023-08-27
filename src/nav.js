import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { CiLogin } from 'react-icons/ci'
import { CiLogout } from 'react-icons/ci'
import { BsBagCheck } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './nav.css'

const Nav = () => {
    const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
    return(
        <>
        <div className='free d-flex flex-row bd-highlight mb-3 border'>
            <div className='icon'>
            <FaTruckMoving /> 
            </div>
            <p>Free shipping when shopping upto $1000</p>
        </div>
        <div className='main_header border-bottom p-0'>
            <div className='container p-0'>
                <div className='logo d-flex justify-content-start'>
                    <img src='./public/img.png' alt='logo'></img>
                </div>
                <div className=' search_box input-group mb-3 w-50 p-3 d-flex justify-content-start'>
                    <input className='form-control border border-info' placeholder='Search your product...' type='text' value='' autoComplete='off' />
                    <button className='btn btn-light border border-info'>Search</button>
                </div>
                <div className='icon row align-items-center d-flex justify-content-between'>
                    <div className='account d-flex flex-row bd-highlight mb-3 col'>
                        <div className='user_icon p-2 bd-highlight'>
                        <AiOutlineUser />
                        </div>
                        <p className="p-2 bd-highlight">Hello, user</p>
                    </div>
                    <div className='second_icon col d-flex justify-content-between'>
                    <Link to='/' className=""><AiOutlineHeart/></Link>
                    <Link to='/' className=""><BsBagCheck/></Link>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='header p-3 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='container d-flex justify-content-between'>
                <ul className='d-inline-flex p-2 justify-content-start list-group list-group-horizontal'>
                    <li className='list-group-item border border-0'>
                        <Link to='/' className='text-decoration-none text-dark bg-white'>Home</Link>
                    </li>
                    <li className='list-group-item border border-0'>
                        <Link to='/product' className='text-decoration-none text-dark bg-white'>Product</Link>
                    </li>
                    <li className='list-group-item border border-0'>
                        <Link to='/about' className='text-decoration-none text-dark bg-white'>About</Link>
                    </li>
                    <li className='list-group-item border border-0'>
                        <Link to='/contact' className='text-decoration-none text-dark bg-white'>Contact</Link>
                    </li>
                </ul>
                <div className='d-flex'>
                    {
                        isAuthenticated ?
                        <button  onClick={() => loginWithRedirect()} class="btn btn-light"><CiLogin /></button>
                        :
                        <button type="button" onClick={() => logout({ returnTo: window.location.origin })} class="btn btn-light"><CiLogout /></button>
                        
                    }
               
               </div>
            </div>
        </div>
        </>
    )
}

export default Nav