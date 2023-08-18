import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return(
        <>
        <div className='free d-flex flex-row bd-highlight mb-3 border'>
            <div className='icon'>
            <FaTruckMoving /> 
            </div>
            <p>Free shipping when shopping upto $1000</p>
        </div>
        <div className='main_header'>
            <div className='container'>
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
        <div className='header'>
            <div className='contact'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product'>Product</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Nav