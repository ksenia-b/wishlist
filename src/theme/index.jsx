import {createTheme} from "@mui/material";

export const theme = createTheme({
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
        MuiTableCell: {
            styleOverrides: {
                root: {
                    textAlign: "center",
                    padding: "0px"
                },
            }
        },
    MuiTable:{
        styleOverrides: {
            root: {
                backgroundColor: "#fff"
            }
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
