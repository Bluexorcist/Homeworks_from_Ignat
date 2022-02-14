import React from 'react'
import Header from './Header'
import RoutesF from './Routes'
import {HashRouter} from "react-router-dom";
import Navbar from "./Navbar";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>
                <Navbar/>
                <RoutesF/>

            </HashRouter>
        </div>
    )
}

export default HW5
