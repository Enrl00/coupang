import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CategoryProvider, CurrentCategoryProvider, ProdProvider } from './provider/ProdData';
import { ActiveProvider, LoadingProvider } from './provider/IsActicve';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <LoadingProvider>
        <ActiveProvider>
            <CategoryProvider>
            <CurrentCategoryProvider>
            <ProdProvider>
                <Layout>
                    <App />
                </Layout>
            </ProdProvider>
            </CurrentCategoryProvider>
            </CategoryProvider>
        </ActiveProvider>
        </LoadingProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
