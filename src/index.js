import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Auth0Provider
    domain="dev-s5c2mv6tvq48ktzi.us.auth0.com"
    clientId="UkJLf2CwCCuL5WzZCLi7Wws9J5MFvXq3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
