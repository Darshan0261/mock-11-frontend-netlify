import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom'

import NoticePost from './Post';
import ViewNotice from './View';
import EditPost from './Edit';

function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                < Route
                    path='/post'
                    element={<NoticePost />}
                />
            </Routes>
            <Routes>
                < Route
                    path='/view'
                    element={<ViewNotice />}
                />
            </Routes>
            <Routes>
                < Route
                    path='/edit'
                    element={<EditPost />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes