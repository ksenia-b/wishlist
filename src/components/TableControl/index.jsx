import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete.js";


const TableControl = () => {
    return (
        <Box style={{display: "flex", justifyContent: "space-between", marginTop: "30px"}}>
            <Box style={{display: "flex", gap: "20px"}}>
                <Button variant={'outlined'} startIcon={<DeleteIcon/>}>All products</Button>
                <Button variant={'outlined'} startIcon={<DeleteIcon/>}>Phones</Button>
                <Button variant={'outlined'} startIcon={<DeleteIcon/>}>Accessories</Button>
            </Box>
            <Button variant={'primary'}>New category</Button>
        </Box>

    )
};

export default TableControl;