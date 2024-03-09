import * as React from 'react'
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

import {useTheme} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function TableMain({columns, dataItems}) {
    const theme = useTheme();
    const table = useReactTable({
        data: dataItems,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    // [theme.breakpoints.down('sm')]: { flexDirection: 'column',  width: '100%' }
    return (
        <TableContainer>
            <Table stickyHeader={true} style={{
                borderCollapse: "separate",
            }} sx={{minWidth: 550}}>
                <TableHead style={{alignItems: "center"}}>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableCell key={header.id} sx={{
                                    backgroundColor: theme.palette.background.primary,
                                    borderBottom: "none",
                                    paddingBottom: "0px"
                                }}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map(row => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <TableCell key={cell.id} align={cell.id === "name" ? 'right' : 'left'}
                                           isItemSelected={false}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

        </TableContainer>
    )
}

export default TableMain;