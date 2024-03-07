import * as React from "react";
import './App.css';
import products from "../src/MOCK_DATA.json";

import {createTheme, ThemeProvider} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Switch from "@mui/material/Switch";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ClearIcon from "@mui/icons-material/Clear.js";
import FormControlLabel from "@mui/material/FormControlLabel";
import {createColumnHelper} from "@tanstack/react-table";

import TableControl from "./components/TableControl/index.jsx";
import TableMain from "./components/TableMain/index.jsx";
import PageHeader from "./components/PageHeader/index.jsx"


import PageFooter from "./components/PageFooter/index.jsx";
import product1 from "../src/assets/i/product1.png"

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor('photo', {
        header: () => 'Photo',
        cell: info => <Box ><img src={product1}/></Box>
    }),
    columnHelper.accessor(row => row.product_code, {
        id: 'product_code',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Product code</span>,
    }),
    columnHelper.accessor('name', {
        header: () => 'Name',
        cell: info => {
            return (<Box style={{"minWidth": "400px"}}>{info.renderValue()}</Box>)
        }
    }),
    columnHelper.accessor('stock', {
        header: () => <span>Stock</span>,
    }),
    columnHelper.accessor('qty', {
        header: 'QTY',
        cell: info => <Box style={{border: "none"}}>{info.getValue("qty")} qty.</Box>,
    }),
    columnHelper.accessor('price_eur', {
        header: 'Price',
        cell: ({row}) => (<Box style={{border: "none", display: "flex", flexDirection: "column"}}>
            <Box style={{fontWeight: "bold"}}>{row.getValue("price_eur")}€</Box>
            <Box>{row.getValue("price_eur")}$</Box>
        </Box>),
    }),
    columnHelper.accessor('added_to_cart', {
        header: '',
        cell: <Button variant="primary" style={{padding: "4px, 2px"}}>Add to cart</Button>
    }),
    columnHelper.accessor('liked', {
        header: '',
        cell: <IconButton variants="liked"><FavoriteIcon/></IconButton>
    }),
    columnHelper.accessor('deleted', {
        header: <FormControlLabel
            control={
                <Switch
                    name="loading"
                    color="primary"
                />
            }
            label="Image"
        />
        ,
        cell: <IconButton variants="liked"><ClearIcon/></IconButton>
    }),

];

const theme = createTheme({
    breakpoints: {
        values: {
            sm: 600,
            md: 900,
            lg: 1200
        },
    },
    palette: {
        primary: {
            main: '#405EFF',
            light: '#999999'
        },
        secondary: {
            main: '#dc004e',
            light: '#999999'
        },
        background: {
            primary: '#FFFFFF'
        },
        text: {
            primary: '#303031',
            secondary: '#405EFF',
            disabled: '#FFFFFF',
            hint: '#999999'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                    borderRadius: '4px',
                },
            },
            variants: [
                {
                    props: {variant: 'primary'},
                    style: {
                        color: '#405EFF',
                        fontWeight: 'bold',
                        backgroundColor: '#fff',
                        border: `1px solid #405EFF`,
                        padding: "9px, 14px, 9px, 14px",
                        // minWidth: "150px",
                        '&:hover': {
                            border: `1px solid #405EFF`,
                            padding: "9px, 14px, 9px, 14px",
                            background: `#405EFF`,
                            color: '#fff'
                        },
                    },
                },
                {
                    props: {variant: 'outlined'},
                    style: {
                        border: 0,
                        backgroundColor: '#E9EBEF',
                        color: '#303031',
                        fontWeight: 'bold',
                        // minWidth: '300px',
                        '&:hover': {
                            border: 0,
                            backgroundColor: `#B2BAC7`,
                            color: '#fff'
                        }
                    },
                },
                {
                    props: {variant: 'backwards'},
                    style: {
                        border: 0,
                        color: '#405EFF',
                        fontWeight: 'bold',
                        '&:hover': {
                            textDecoration: 'underline',
                        }
                    },
                },
            ],
        },
    },

});


function App() {
    console.log("products = ", products)
    return (
        <ThemeProvider theme={theme}>
            <>
                <PageHeader/>
                <TableControl/>
                <TableMain columns={columns} dataItems={products}/>
                <PageFooter/>
            </>
        </ThemeProvider>
    )
}

export default App
