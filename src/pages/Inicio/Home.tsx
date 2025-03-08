import Header from './content/HeaderSection'
import Body from './content/BodyContent';
import Footer from './content/FooterSection';
import { Box } from '@mui/material';


const inicio = () =>{
    return(
        <>
            <Box maxWidth="1500px" margin="auto">
                <Header></Header>
                <Body></Body>                
            </Box>
            <Footer></Footer>
        </>
    );
}

export default inicio;