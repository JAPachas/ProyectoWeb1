import { Button } from "@mui/material";
import { title } from "process";
import { FC } from "react";

interface Props{
    text:string    
    ColorFondo:string,
    CornerRadius:number,
    fontColor:string,
    flexNumber:number,
    hover:string,
    FontFamily:string
}

const MyButton:FC<Props> = ({text,ColorFondo,CornerRadius,fontColor,flexNumber,hover,FontFamily}) =>{
    return (
        <Button
            sx={{
                backgroundColor: ColorFondo,   
                borderRadius: CornerRadius,
                color: fontColor,
                flex: flexNumber,
                textTransform:'none',
                fontFamily: FontFamily,
                '&:hover': {
                backgroundColor: hover, 
                },                
            }}
        >
            {text}
        </Button>
    );
}

export default MyButton