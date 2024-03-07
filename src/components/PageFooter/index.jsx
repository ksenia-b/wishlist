import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace.js";
import * as React from "react";

const PageFooter = () => {
    return (
        <Box style={{display: "flex", justifyContent: "space-between", marginTop: "15px"}}>
            <Button variant={'backwards'} startIcon={<KeyboardBackspaceIcon/>}>Back</Button>
            <Box style={{display: "flex", gap: "15px"}}>
                <Button variant={'primary'}>Add product</Button>
                <Button variant={'primary'}>Add to cart</Button>
            </Box>
        </Box>
    )
}

export default PageFooter;