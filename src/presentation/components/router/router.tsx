import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

type Props = {
  makeLogin: () => JSX.Element
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={makeLogin()} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
