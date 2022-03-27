import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { SignUp } from '@/presentation/pages'

type Props = {
  makeLogin: () => JSX.Element
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={makeLogin()} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
