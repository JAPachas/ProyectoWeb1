import { Box } from "@mui/material";
import MyTypography from "../../../components/MyTypography"
import Navigator from '../../../components/Navigator'

const Header = () =>{
    return(       
        <Box sx={{padding:"128px 16px", textAlign:"center", margin:"16px 0px"}}>
            <MyTypography 
                text="PHOTOGRAPHER" 
                size="24px"
                letterSpacing="6px"
                fontFamily="Raleway"
                margin="10px 0"
                fontWeight="400"
                opacity="0.5"
            />
            <MyTypography 
                text="John Doe" 
                size="36px"
                letterSpacing="6px"
                fontFamily="Raleway"
                margin="10px 0"
                fontWeight="400"
                opacity="0.5"
            />
            <Navigator/>
        </Box>
    );
}

export default Header