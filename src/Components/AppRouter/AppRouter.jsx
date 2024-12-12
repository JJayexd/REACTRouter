import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../../Pages/HomePage/HomePage'
import { AboutPage } from '../../Pages/AboutPage/AboutPage'
import { PosterListPage } from '../../Pages/PosterListPage/PosterListPage'
import { ErrorPage } from '../../Pages/ErrorPage/ErrorPage'
export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posters" element={<PosterListPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}