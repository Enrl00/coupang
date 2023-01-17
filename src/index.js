import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CategoryProvider, CurrentCategoryProvider, ProdProvider } from './provider/ProdData';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { ActiveProvider } from './provider/IsActicve';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ActiveProvider>
            <CategoryProvider>
            <CurrentCategoryProvider>
            <ProdProvider>
                <Header/>
                    <App />
                <Navbar/>
            </ProdProvider>
            </CurrentCategoryProvider>
            </CategoryProvider>
        </ActiveProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
