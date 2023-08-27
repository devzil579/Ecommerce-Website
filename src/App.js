import React from 'react'
import Nav from './nav'
import {BrowserRouter} from 'react-router-dom';
import Rout from './route'
const App = () => {
    return(
        <>
        <BrowserRouter>
        <Nav />
        <Rout />
        </BrowserRouter>
        </>
    )
}

export default App