import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

type Factory = {
  makeLogin: () => JSX.Element
  makeSignUp: () => JSX.Element
}

const Router: React.FC<Factory> = (factory: Factory) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={factory.makeLogin()} />
        <Route path="/signup" element={factory.makeSignUp()} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
