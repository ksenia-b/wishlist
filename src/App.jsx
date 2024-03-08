import * as React from "react";
import { useState } from "react";
import './App.css';
import products from "../src/MOCK_DATA.json";

import {createTheme, ThemeProvider} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Switch from "@mui/material/Switch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import FormControlLabel from "@mui/material/FormControlLabel";
import {createColumnHelper} from "@tanstack/react-table";

import TableControl from "./components/TableControl/index.jsx";
import TableMain from "./components/TableMain/index.jsx";
import PageHeader from "./components/PageHeader/index.jsx"


import PageFooter from "./components/PageFooter/index.jsx";
import product1 from "../src/assets/i/product1.png"

const columnHelper = createColumnHelper()

const HeartButton = () => {
    const [ active, setActive ] = useState(false);

    return (
        <IconButton variants="liked" style={{border: "1px solid #999999", backgroundColor: active ? 'blue' : 'white'}} onClick={() => setActive(!active)}>
            <FavoriteIcon sx={{ color: active ? 'white' : 'grey'}} />
        </IconButton>
    )
}

// const handleLike = (e, id) => {
//     console.log("handleLike = ", e, id,  e.target.className)
//     // e.target.className = e.target.className + "liked";
//     setIsActive(current => !current);
// }
const handleLike = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
};


const columns = [
    columnHelper.accessor('photo', {
        header: () => <Typography>Photo</Typography>,
        cell: info => <Box><img src={product1}/></Box>
    }),
    columnHelper.accessor(row => row.product_code, {
        id: 'product_code',
        cell: info => <Typography>{info.getValue()}</Typography>,
        header: () => <Typography style={{minWidth: "100px"}}>Product code</Typography>,
    }),
    columnHelper.accessor('name', {
        header: () => <Typography align={"left"}>Name</Typography>,
        cell: info => {
            return (<Typography style={{
                minWidth: "500px",
                fontWeight: "bold"}}>{info.renderValue()}</Typography>)
        },
    }),
    columnHelper.accessor('stock', {
        header: () => <Typography>Stock</Typography>,
    }),
    columnHelper.accessor('qty', {
        header: <Typography>QTY</Typography>,
        cell: info => <Typography style={{border: "none"}}>{info.getValue("qty")} qty.</Typography>,
    }),
    columnHelper.accessor('price_eur', {
        header: <Typography>Price</Typography>,
        cell: ({row}) => (<Box style={{border: "none", display: "flex", flexDirection: "column"}}>
            <Box style={{fontWeight: "bold"}}>{row.getValue("price_eur")}€</Box>
            <Box>{row.getValue("price_eur")}$</Box>
        </Box>),
    }),
    columnHelper.accessor('added_to_cart', {
        header: '',
        cell: <Button variant="primary" style={{minWidth: "110px", padding: "4px, 2px"}}>Add to cart</Button>,

    }),
    columnHelper.accessor('liked', {
        id: 'liked',
        header: '',
        cell: ({row, isItemSelected}) => <Box style={{minWidth: "50px"}}><HeartButton/></Box>
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
    typography:{
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(',')
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
            primary: '#F6F7F9',
            secondary: '#FFFFFF'
        },
        text: {
            primary: '#303031',
            secondary: '#405EFF',
            disabled: '#FFFFFF',
            hint: '#999999'
        }
    },
    components: {
        MuiTableCell:{
            styleOverrides:{
                root:{
                    textAlign: "center"
                },
            }
},
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
