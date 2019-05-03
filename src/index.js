import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { orange, teal, red } from '@material-ui/core/colors';
import RouteManage from './RouteManage'

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: orange,
        error: red,
    },
})


ReactDOM.render(
    <MuiThemeProvider theme={theme}>  
        <RouteManage />
    </MuiThemeProvider>, 
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
