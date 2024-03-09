import * as React from "react";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HeartButton = () => {
    const [active, setActive] = useState(false);

    return (
        <IconButton variants="liked" style={{
            border: `1px solid ${active ? "#405EFF" : "#999999"}`,
            backgroundColor: active ? '#405EFF' : '#fff'
        }} onClick={() => setActive(!active)}>
            <FavoriteIcon sx={{color: active ? '#fff' : '#405EFF'}}/>
        </IconButton>
    )
}

export default HeartButton;