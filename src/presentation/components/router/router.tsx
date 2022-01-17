import { Login } from '@/presentation/pages'
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
