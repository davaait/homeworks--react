import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Navbar/>

            </HashRouter>
        </div>
    )
}

export default HW5
