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

const description = 'My name is Julian Ayllon Lorems maxime fugiat debitisdipisci obcaecati quo amet, provident ratione asperiores itaque obcaecati quo amet, provident ratione asperiores itaqueobcaecati quo amet, provident ratione asperiores itaqueobcaecati quo amet, provident ratione asperiores itaqueobcaecati quo amet, provident ratione asperiores itaque!'




export default function About() {





    return (
        <Grid container spacing={5} sx={{ mt: 3, textAlign:'center' }}>




            <Grid item xs={12} md={4} style={{ backgroundColor: "orange" }}>

                <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                    <Avatar
                        alt="Julian Ayllon"
                        src="https://global-uploads.webflow.com/5fd2ba952bcd68835f2c8254/649625b63d19cea8eaf36d6a_646bbb347534c5fd54e5b5e2_Default_0_8ZwqXr-p-500.png"
                        sx={{ width: 150, height: 150, marginLeft:'auto', marginRight:'auto' }}
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
                    I write about building profitable indie products as a developer.
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