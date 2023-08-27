import React, { useState } from 'react'
import Nav from './nav'
import {Link} from 'react-router-dom'
import {  BsArrowRight } from 'react-icons/bs'
import {  FiTruck } from 'react-icons/fi'
import {  BsCurrencyDollar } from 'react-icons/bs'
import {  AiOutlineShoppingCart } from 'react-icons/ai'
import {  BsEye } from 'react-icons/bs'
import HomeProduct from './homeProduct'
const Home = () => {
    const [homeProduct, setHomeProduct] = useState()
    return(
        <>
        <div className='top_banner'>
            <div className='container'>
                <div className='detail'>
                    <h2>The Best Note Book Collection 2023</h2>
                    <Link to='/product'>Shop Now <BsArrowRight/></Link>
                </div>
                <div className='img-box'>
                    <img src='./img/slider-img.png' alt='sliderimg'/>
                </div>
            </div>
        </div>
        <div className='product-type'>
            <div className='container'>
                <div className='box'>
                    <div className='img_box'>
                        <img src='../public' alt=''/>
                    </div>
                    <div className='detail'>
                        <p>23 products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='../public/img/headphone.png' alt=''/>
                    </div>
                    <div className='detail'>
                        <p>23 products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/cpu.png' alt=''/>
                    </div>
                    <div className='detail'>
                        <p>23 products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/smart_watch.png' alt=''/>
                    </div>
                    <div className='detail'>
                        <p>63 products</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='about'>
            <div className='container text-center'>
            <div className='row'>
                <div className='col d-flex justify-content-center '>
                    <div className='icon'>
                        <FiTruck className='text-danger fs-2 m-1'/>
                    </div>
                    <div className='detail d-flex flex-column mb-3'>
                        <h3>Free Shipping</h3>
                        <p>Order over $1000</p>
                    </div>
                </div>
                <div className='col d-flex justify-content-center'>
                    <div className='icon'>
                        <BsCurrencyDollar className='text-danger fs-2 m-1'/>
                    </div>
                    <div className='detail d-flex flex-column mb-3'>
                        <h3>Return and Refund</h3>
                        <p>Money back gaurenty</p>
                    </div>
                </div>
                <div className='col d-flex justify-content-center '>
                    <div className='icon'>
                        <BsCurrencyDollar className='text-danger fs-2 m-1'/>
                    </div>
                    <div className='detail d-flex flex-column mb-3'>
                        <h3>Member Discount</h3>
                        <p>On every order</p>
                    </div>
                </div>
                <div className='col d-flex justify-content-center'>
                    <div className='icon'>
                        <BsCurrencyDollar className='text-danger fs-2 m-1' />
                    </div>
                    <div className='detail d-flex flex-column mb-3'>
                        <h3>Customer Support</h3>
                        <p>Every time Call Support</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='container'>
                {
                    homeProduct.map((curElm)=>
                    {
                        return(
                            <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                    <div className='icon'>
                                        <AiOutlineShoppingCart/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='box'></div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Home