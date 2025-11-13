import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Navegar from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegar />
  </StrictMode>,
)
