import * as React from "react";

import {useTheme} from '@mui/material';
import {styled} from '@mui/material';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledButton = styled(Button)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));

const TableControl = ({onHandleSetFilter}) => {
    const theme = useTheme();

    return (
        <Box sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
            marginTop: "30px",
            [theme.breakpoints.down('sm')]: {flexDirection: 'column', alignItems: 'center', width: '100%'}
        }}>
            <Box sx={{
                display: "flex",
                gap: "20px",
                [theme.breakpoints.down('sm')]: {flexDirection: 'column', alignItems: 'center', width: '100%'}
            }}>
                <StyledButton variant={'outlined'} startIcon={<DeleteIcon/>} onClick={() => onHandleSetFilter("")}>All
                    products</StyledButton>
                <StyledButton variant={'outlined'} startIcon={<DeleteIcon/>}
                              onClick={() => onHandleSetFilter("phones")}>Phones</StyledButton>
                <StyledButton variant={'outlined'} startIcon={<DeleteIcon/>}
                              onClick={() => onHandleSetFilter("accessories")}>Accessories</StyledButton>
            </Box>
            <StyledButton variant={'primary'}>New category</StyledButton>
        </Box>

    )
};

export default TableControl;