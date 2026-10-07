import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/styles.css'
import OlymphusApp from './OlymphusApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OlymphusApp />
  </StrictMode>,
)
