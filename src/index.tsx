import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalFonts from './assets/fonts'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Avenir Regular';
    background: #F0F3FF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
