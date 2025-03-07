import { Box } from "@mui/material";
import { themes } from "../../../config/icons";

const body = () =>{

    const themeMode = themes.light

    return (
        <Box
            display="flex"        
            padding="0px 8px"  
            justifyContent="space-between"
            marginBottom="128px"
        >
            <Box padding="0px 8px" width="50%">
                <Box component={"img"} src={themeMode.imagen.imgnovia} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgrisco} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgcatarata} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgparis} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgbosque} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgrisco2} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgparis} width="100%" marginBottom="12px"/>
            </Box>
            <Box padding="0px 8px" width="50%">
                <Box component={"img"} src={themeMode.imagen.imgnadando} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgplaya} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgnovia} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgneblina} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgrisco} width="100%" marginBottom="12px"/>
                <Box component={"img"} src={themeMode.imagen.imgnadando} width="100%" marginBottom="12px"/>
            </Box>
        </Box>
    );
}

export default body;