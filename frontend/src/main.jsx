
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { StoreContext } from '../src/Context/StoreContext.jsx'



createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <StoreContext>
  <App/>
 

  </StoreContext>


 
  </BrowserRouter>
)