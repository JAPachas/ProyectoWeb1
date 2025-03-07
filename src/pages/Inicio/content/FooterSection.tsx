import { Box } from "@mui/material";
import MyTypography from "../../../components/MyTypography";
import { themes } from "../../../config/icons";

const footer = () =>{

    const themeMode = themes.light

    return(
        <Box sx={{ padding: "64px 16px", backgroundColor: "#f1f1f1"}}>
            <Box sx={{
                display: 'flex',               
                alignItems: 'center',          
                justifyContent: 'center',      
                width: '100%',                 
                flexDirection:"column"
            }}>    

                <Box>
                    <Box component={"img"} src={themeMode.icons.iconFacebook} sx={{width:"18px", height:"18px", marginRight:"5px"}}/>
                    <Box component={"img"} src={themeMode.icons.iconInstagram} sx={{width:"18px", height:"18px", marginRight:"5px"}}/>
                    <Box component={"img"} src={themeMode.icons.iconSnapchat} sx={{width:"18px", height:"18px", marginRight:"5px"}}/>
                    <Box component={"img"} src={themeMode.icons.iconPinterest} sx={{width:"18px", height:"18px", marginRight:"5px"}}/>
                    <Box component={"img"} src={themeMode.icons.icontwitter} sx={{width:"18px", height:"18px", marginRight:"5px"}}/>
                    <Box component={"img"} src={themeMode.icons.iconLinkedin} sx={{width:"18px", height:"18px", marginRight:"5px"}}/>
                </Box>                   
            </Box>

            <Box sx={{
                display: 'flex',               
                alignItems: 'center',          
                justifyContent: 'center',      
                width: '100%',                 
            }}>
                <MyTypography 
                    text="Powered by" 
                    size="18px"
                    letterSpacing="6px"
                    fontFamily="Raleway"
                    margin="10px 0"
                    fontWeight="400"
                    opacity="0.5"
                />

                <a href="https://www.w3schools.com/w3css/default.asp" style={{ marginLeft: '8px', color: '#262626' }}>
                    W3.CSS
                </a>
            </Box>
        </Box>
    );
}

export default footer;