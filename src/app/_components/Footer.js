import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



// function Copyright() {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }


function Copyright() {

    return (
        <Typography pb={2} variant="body1" color="text.secondary" align="center">
            {/* <Link title='Click here to check out the code for this portfolio!' color="inherit" target='_blank' style={{ textDecoration: 'none', fontSize: '17px', color:'black' }} href="https://github.com/cusco1982/pfl-next13">
                Designed & Built by Julian Ayllon
            </Link> */}



                Designed & Built by&nbsp;
            <Link title='Click here to check out my Github!' color="inherit" target='_blank' style={{ textDecoration: 'none', fontSize: '17px', color:'black' }} href="https://github.com/cusco1982">
                Julian Ayllon
            </Link>


        </Typography>
    );
}


export default function Footer(props) {
    const { title } = props;



    return (
        // <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Box component="footer" id="footer" sx={{ bgcolor: 'whitesmoke', pt: 6 }}>

            <Container maxWidth="lg">




                <Typography variant="h3" gutterBottom align="center" style={{ fontWeight: "600" }}>
                    {title}
                </Typography>




                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    pb={6}
                >
                    I'm currently looking for full-time Software Engineering opportunities!
                    <br />
                    If you know of any positions available,
                    if you have any questions,
                    or if you just want to say hi,
                    <br />
                    please feel free to email me at:
                    <br />

                    <a href="mailto:julian.ayllon28@gmail.com">julian.ayllon28@gmail.com.</a>


                </Typography>





                <Copyright />






            </Container>
        </Box>
    )
};



Footer.propTypes = {
    // description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};