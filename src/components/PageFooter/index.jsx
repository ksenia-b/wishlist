import * as React from "react";
import {useTheme, styled} from '@mui/material';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const StyledButton = styled(Button)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));
const PageFooter = () => {
    const theme = useTheme();

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            [theme.breakpoints.down('sm')]: {flexDirection: 'column', width: '100%'}
        }}>
            <StyledButton variant={'backwards'} startIcon={<KeyboardBackspaceIcon/>}>Back</StyledButton>
            <Box sx={{
                display: "flex",
                gap: "15px",
                [theme.breakpoints.down('sm')]: {flexDirection: 'column', width: '100%'}
            }}>
                <StyledButton variant={'primary'}>Add product</StyledButton>
                <StyledButton variant={'primary'}>Add to cart</StyledButton>
            </Box>
        </Box>
    )
}

export default PageFooter;