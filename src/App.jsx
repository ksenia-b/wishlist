import * as React from "react";

import './App.css';


import {ThemeProvider} from '@mui/material';

import PageHeader from "./components/PageHeader/index.jsx"

import PageFooter from "./components/PageFooter/index.jsx";
import {theme} from "./theme/index.jsx"

import Content from "./components/Content/index.jsx";

function App() {


    return (
        <ThemeProvider theme={theme}>
            <>
                <PageHeader/>
                <Content/>
                <PageFooter/>
            </>
        </ThemeProvider>
    )
}

export default App
