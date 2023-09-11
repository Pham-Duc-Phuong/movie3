import React from 'react'
import List from '../components/List'
import { Route, Routes } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Routes>
                <Route index element={<List />} />
            </Routes>
        </div>
    )
}

export default HomePage