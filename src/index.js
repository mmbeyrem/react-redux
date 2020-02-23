import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Rooter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App'
import './index.css';
import configureStore from './redux/configStore'
import { Provider as ReduxProvider } from 'react-redux'
const store = configureStore();



render(
    <ReduxProvider store={store}>
        <Rooter>
            <App />
        </Rooter>
    </ReduxProvider>
    , document.getElementById("root"));
