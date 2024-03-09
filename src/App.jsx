import * as React from "react";
import {useState, useEffect} from "react";
import './App.css';
import products from "../src/MOCK_DATA.json";

import {ThemeProvider} from '@mui/material';

import TableControl from "./components/TableControl/index.jsx";
import TableMain from "./components/TableMain/index.jsx";
import PageHeader from "./components/PageHeader/index.jsx"

import PageFooter from "./components/PageFooter/index.jsx";
import {theme} from "./theme/index.jsx"
import {columns} from "./columns.jsx"

function App() {
    const [data, setData] = useState(products);

    const handleSetFilter = (filter) => {
        if (filter) {
            setData(products.filter(({category}) => category === filter))
        } else {
            setData(products)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <>
                <PageHeader/>
                <TableControl onHandleSetFilter={handleSetFilter}/>
                <TableMain columns={columns} dataItems={data}/>
                <PageFooter/>
            </>
        </ThemeProvider>
    )
}

export default App
