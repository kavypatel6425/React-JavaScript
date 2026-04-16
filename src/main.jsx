// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import Main_Router from './Router/Main_Router.jsx'
import Mai_Router_2 from './Router/Lecture-12/Mai_Router_2.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './Router/ErrorBoundary.jsx'
import Edit_Api from './Router/Lecture-28/Edit_Api.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Main_Router /> */}
    <Mai_Router_2/>
  </BrowserRouter>

  // <StrictMode>
  //   <App/>
  // </StrictMode>

  // <ErrorBoundary>
  //   <Edit_Api/>
  // </ErrorBoundary>
)
