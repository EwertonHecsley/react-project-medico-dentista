import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Home} from '../pages/home/Home'
import {Voluntario} from '../pages/voluntario/Voluntario'

export const PageRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/voluntario" element={<Voluntario/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}