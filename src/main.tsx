import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { HashRouter } from 'react-router-dom'
// import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    // <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    
    // </HashRouter>
  // </React.StrictMode>,
)
