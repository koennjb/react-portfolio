import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FireaseContextProvider } from './context/AuthenticationContext';
import FirebaseAuth from './firebase/FirebaseAuth';

ReactDOM.render(
    <React.StrictMode>
        <FireaseContextProvider value={new FirebaseAuth()}>
            <App />
        </FireaseContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
