import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { JairPage } from './JairPage'

import './styles/index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JairPage />
    </BrowserRouter>
  </React.StrictMode>
)
