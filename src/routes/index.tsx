import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../features/MainPage';

export function Router() {
    return(
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/:routeId" element={<MainPage />} />
                <Route path="/:routeId/:directionId" element={<MainPage />} />
                <Route path="/:routeId/:directionId/:stopId" element={<MainPage />} />
                <Route path="/*" element={<MainPage />}/>
            </Routes>
        </BrowserRouter>
    )
}