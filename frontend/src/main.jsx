import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import AuthProvider from "./components/AuthProvider/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
           <AuthProvider>
        <Provider store={store}>
            
        <Router>
                   
                    <App />
          </Router>
    </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
