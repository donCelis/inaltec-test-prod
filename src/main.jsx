import { createRoot } from 'react-dom/client'
import './styles/index.css'

import App from './components/App'
import { AppProvider } from './context'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
)
