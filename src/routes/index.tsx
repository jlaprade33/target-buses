import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from '../features/MainPage';

export function Router() {
    return(
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}