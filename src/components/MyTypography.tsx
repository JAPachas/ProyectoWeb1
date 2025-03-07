import { Typography } from "@mui/material";
import { FC } from "react";

interface Props{
    text:string,
    size:string,
    letterSpacing:string,
    fontFamily:string,
    margin:string,
    fontWeight:string,
    opacity:string
}

const MyTypography:FC<Props> = ({text,size,letterSpacing,fontFamily,margin,fontWeight,opacity}) =>{
    return(
        <Typography
            sx={{
                fontSize:size,
                letterSpacing:letterSpacing,
                fontFamily:fontFamily,
                margin:margin,
                fontWeight:fontWeight,
                opacity:opacity
            }}
        >
            {text}
        </Typography>
    );
}

export default MyTypography;