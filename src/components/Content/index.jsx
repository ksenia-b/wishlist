import * as React from "react";
import {useState} from "react";

import TableControl from "../TableControl/index.jsx";
import TableMain from "../TableMain/index.jsx";

import products from "../../MOCK_DATA.json";
import {columns} from "../../columns.jsx"

const Content = () => {
    const [data, setData] = useState(products);

    const handleSetFilter = (filter) => {
        if (filter) {
            setData(products.filter(({category}) => category === filter))
        } else {
            setData(products)
        }
    }
    return(
        <>
            <TableControl onHandleSetFilter={handleSetFilter}/>
            <TableMain columns={columns} dataItems={data}/>
        </>

    )
}

export default Content;