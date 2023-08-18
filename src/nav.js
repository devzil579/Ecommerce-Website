import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import './nav.css'

const Nav = () => {
    return(
        <>
        <div className='free'>
            <div className='icon'>
            <FaTruckMoving /> 
            </div>
            <p>Free shipping when shopping upto $1000</p>
        </div>
        <div className='main_header'>
            <div className='container'>
                <div className='logo'>
                    <img src='../public/img.svg' alt='logo'></img>
                </div>
                <div className='search_box'>
                    <input placeholder='enter the product name' type='text' value='' autoComplete='off' />
                    <button>Search</button>
                </div>
                <div className='icon'>
                    <div className='account'>
                        <div className='user_icon'>
                        <AiOutlineUser />
                        </div>
                        <p>Hello, user</p>
                    </div>
                    <AiOutlineHeart />
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav