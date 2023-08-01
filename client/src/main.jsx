import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
} from "react-router-dom";
import {ThemeProvider} from './Context/Themecontext'
import { QueryClient, QueryClientProvider } from 'react-query'
import ScrollToTop from './utils/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <BrowserRouter>
    <ScrollToTop />
    <HelmetProvider>
    <App />
    <ToastContainer />
   </HelmetProvider>
    </BrowserRouter>
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
