import * as React from 'react';
// import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
// import Link from '@mui/material/Link';

import { Box, Button, Container, Grid, Typography, Link } from '@mui/material';


import OverlayButton from './OverlayButton';


import styles from './overlay.module.css';





export default function Overlay() {


    const sidebar = {
        title: 'About',
        description:
            'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
        archives: [
            { title: 'March 2020', url: '#' },
            { title: 'February 2020', url: '#' },
            { title: 'January 2020', url: '#' },
            { title: 'November 1999', url: '#' },
            { title: 'October 1999', url: '#' },
            { title: 'September 1999', url: '#' },
            { title: 'August 1999', url: '#' },
            { title: 'July 1999', url: '#' },
            { title: 'June 1999', url: '#' },
            { title: 'May 1999', url: '#' },
            { title: 'April 1999', url: '#' },
        ],
        social: [
            { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/cusco1982' },
            { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/julian-ayllon/' },
            // { name: 'Instagram', icon: InstagramIcon, url: '#' },
            // { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/StardustSake' },
            // { name: 'Pinterest', icon: PinterestIcon, url: '#' },
            // { name: 'Discord', icon: TwitterIcon, url: '#' },
            // { name: 'LinkTree', icon: TwitterIcon, url: '#' },
            // { name: 'Facebook', icon: FacebookIcon, url: '#' },
        ],
    };

    const { archives, descriptionNotUsed, social, titlenotused } = sidebar;
    // const { description, title } = props;


    const title = "Julian Ayllon"
    // const description = "Passionate about changing the world with technology!"




    const gradientColors= "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1"



    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"

            // DARK MODE
            // backgroundColor="black"


            className={styles.bgstyle}

            style={{
                background: `linear-gradient(136deg,${gradientColors})`,
                backgroundSize: "1200% 1200%",
                // backgroundColor:'#e9ecef'
            }}
        >


            <div className={styles.stars}></div>

            <Grid item>



                <Typography variant="h1" align="center" style={{ backgroundColor: "", color:'white' }}>
                    {title}
                </Typography>

                <Typography
                    id='typewriter'
                    variant="subtitle1"
                    align="center"
                    color="white"
                    component="p"
                    py={2}
                    sx={{ bgcolor: '', fontSize: "1.2rem" }}
                >
                    {/* {description} */}
                    &nbsp;
                </Typography>





                <Stack direction="row" p={5} justifyContent='center' spacing={2} alignItems="center" style={{ backgroundColor: "" }}>
                    {social.map((network) => (
                        <Link
                            display="block"
                            variant="body1"
                            href={network.url}
                            key={network.name}
                            target='_blank'
                            sx={{
                                mb: 0.5,
                                color: 'white',
                                '&:hover': {
                                    color: 'black'
                                },
                                transition: 'color 1s'
                            }}
                            title={network.name}



                        >
                            <network.icon sx={{ fontSize: 45 }} />
                        </Link>
                    ))}
                </Stack>


                <Box textAlign='center' style={{ backgroundColor: "" }}>


                    <OverlayButton />



                </Box>


            </Grid>










        </Grid>
    )
};




// Footer.propTypes = {
//     description: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
// };
