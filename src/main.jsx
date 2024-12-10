import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './Styled/Global.Style.js'
import { theme } from './Styled/Theme.Style.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalStyle theme={theme}/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
