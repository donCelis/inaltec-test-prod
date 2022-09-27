import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import './styles/index.css'

import App from './components/App'
import { AppProvider } from './context'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
    <ToastContainer
      pauseOnHover={false}
      autoClose={2000}
      closeButton={false}
      draggable={false}
      theme='colored'
    />
  </AppProvider>
)
