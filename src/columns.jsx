import * as React from "react";

import {createColumnHelper} from "@tanstack/react-table";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import HeartButton from "./components/HeartButton/index";

import product1 from "./assets/i/product1.png";

const columnHelper = createColumnHelper()

export const columns = [
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
                fontWeight: "bold"
            }}>{info.renderValue()}</Typography>)
        },
        filterFn: 'fuzzy'
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