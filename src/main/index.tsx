import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from '@/presentation/components'
import { makeLogin } from '@/main/factories/pages/login/login-factory'
import '@/presentation/styles/global.scss'
import { SignUp } from '@/presentation/pages'

ReactDOM.render(
  <Router makeLogin={makeLogin} makeSignUp={() => <SignUp />} />,
  document.getElementById('main')
)
