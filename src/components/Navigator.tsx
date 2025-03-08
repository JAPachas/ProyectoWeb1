import { Box } from "@mui/material";
import MyButton from "./MyButton";

const Navigator = () =>{
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',           
                padding: '32px 0px',
                width: '100%',
            }}
        >
            <Box sx={{
                display: 'flex',            
                alignItems: 'center',       
                border: '1px solid #e0e0e0', 
                width: '356px',             
                }}>                    
                <MyButton text="HOME" ColorFondo="#f6f6f6" CornerRadius={0} fontColor="#656565" flexNumber={1} hover="#e0e0e0" FontFamily="Raleway"/>
                <MyButton text="ABOUT" ColorFondo="#f6f6f6" CornerRadius={0} fontColor="#656565" flexNumber={1} hover="#e0e0e0" FontFamily="Raleway"/>
                <MyButton text="BLOG" ColorFondo="#f6f6f6" CornerRadius={0} fontColor="#656565" flexNumber={1} hover="#e0e0e0" FontFamily="Raleway"/>
                <MyButton text="CONTACT" ColorFondo="#f6f6f6" CornerRadius={0} fontColor="#656565" flexNumber={1} hover="#e0e0e0" FontFamily="Raleway"/>
            </Box>
        </Box>
    );
}

export default Navigator;