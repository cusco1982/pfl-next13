import React from 'react'

import { Box, Button, Grid, Divider, Link, Paper, Typography, Stack } from "@mui/material";
import Avatar from '@mui/material/Avatar';



import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




import avatarimg from './avatar.jpeg';



const featuredPosts = [
    {
        title: 'ecommerce',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        url: 'https://github.com/cusco1982/ecommerce'
    },
    {
        title: 'constructionTemplate',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        url: 'https://github.com/cusco1982/constructionTemplate'
    },
];

const social = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/cusco1982' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/julian-ayllon/' },

];


const title = 'Hi, Im Julian'

const description = 'My name is Julian Ayllon. I have been coding for 5 years now. A few of my interests are cinemoatography, chess, and painting. I\'ve\ been passionate about programming ever since I watched Hackers(1995) and The Matrix(1999) as a little kid. I believe our world will one day be like the futuristic societies shown in the movies and that the average human will be able to bypass security doors and such. Movies many times have predicted the future and I intend to be at the forefront of whatever technology I use. My dream is to combine both my programming and construction background to create a successfull home cybersecurity business so that every home owner can feel safe at or away from home and have the security that no matter where they are, their family is safe. I\'m\ a big family man and I believe everyone deserves to know their family is safe. It is what I would want and I intend to push myself to the limit and stay on the forefront of technology.'




export default function About() {





    return (
        <Grid container spacing={5} sx={{ mt: 3, textAlign: 'center' }}>




            <Grid item xs={12} md={4} style={{ backgroundColor: "orange" }}>

                <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                    <Avatar
                        alt="Julian Ayllon"
                        src="https://global-uploads.webflow.com/5fd2ba952bcd68835f2c8254/649625b63d19cea8eaf36d6a_646bbb347534c5fd54e5b5e2_Default_0_8ZwqXr-p-500.png"
                        sx={{ width: 150, height: 150, marginLeft: 'auto', marginRight: 'auto' }}
                    />
                </Paper>


                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Julian Ayllon</Typography>
                <Typography variant="h8" gutterBottom sx={{ mt: 3 }}>Fullstack Web Developer</Typography>


                <Stack direction="row" spacing={1} justifyContent='center'>

                    {social.map((network) => (
                        <Link
                            display="block"
                            variant="body1"
                            href="#"
                            key={network.name}
                            sx={{ mb: 0.5, py: 2 }}
                            title={network.name}
                        >

                            <network.icon />


                        </Link>
                    ))}

                </Stack>


            </Grid>









            <Grid
                item
                xs={12}
                md={8}
                sx={{
                    '& .markdown': {
                        py: 3,
                        bgcolor: 'red'
                    },
                    '& .temptitle': {
                        bgcolor: 'pink'
                    },
                    textAlign: 'center'
                }}
            >




                <Typography className='temptitle' variant="h2" gutterBottom>
                    {title}
                </Typography>




                <Typography className='temptitle' variant="h6" gutterBottom>
                    “We shall not cease from exploration <br></br>
                    And the end of all our exploring <br></br>
                    Will be to arrive where we started <br></br>
                    And know the place for the first time.” <br></br>
                    —T.S. Eliot, from “Little Gidding"
                </Typography>



                <Divider />



                <Box className='markdown' sx={{ mt: 1, typography: 'body1' }}>
                    {description}
                </Box>



                <Divider />


                <Link href='/resume' target='_blank'>
                    <Button variant="contained">Resume</Button>
                </Link>



            </Grid>
















        </Grid>
    )
};