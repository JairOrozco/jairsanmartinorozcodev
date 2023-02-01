
import { Routes, Route, Navigate } from "react-router-dom"

import { HomePage, AboutPage, PortfolioPage, ContactPage } from "../Pages"
import { Navbar } from '../Components'


export const AppRoutes = () => {

    return (
        
        <>
            <Navbar />
            <Routes>

                <Route path="/" element={ <HomePage/> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/portfolio" element={ <PortfolioPage /> } />
                <Route path="/contact" element={ <ContactPage /> } />

                <Route path="/*" element={ <Navigate to='/' /> } />

            </Routes>

        </>
    )
}
