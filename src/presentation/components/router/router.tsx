import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

type Props = {
  makeLogin: () => JSX.Element
  makeSignUp: () => JSX.Element
}

const Router: React.FC<Props> = ({ makeLogin, makeSignUp }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={makeLogin()} />
        <Route path="/signup" element={makeSignUp()} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
