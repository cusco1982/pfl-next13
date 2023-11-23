import React from 'react'

import { Box, Button, Grid, Divider, Link, Paper, Typography, Stack } from "@mui/material";
import Avatar from '@mui/material/Avatar';



import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



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


export default function About() {





    return (
        <div style={{ backgroundColor: "" }}>


            <Grid container spacing={5} sx={{ mt: 3, textAlign: 'center' }}>

                <Grid item xs={12} md={4} style={{ backgroundColor: "" }}>

                    <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                        <Avatar
                            alt="Julian Ayllon"
                            src="/avatar.jpeg"
                            sx={{ width: 150, height: 150, marginLeft: 'auto', marginRight: 'auto' }}
                        />
                    </Paper>

                    <Typography variant="h6" id="skillScroll" gutterBottom sx={{ mt: 3, scrollMarginTop: '70px' }}>Julian Ayllon</Typography>

                    <Typography variant="h8" gutterBottom sx={{ mt: 3 }}>Fullstack Web Developer</Typography>

                    <Stack direction="row" spacing={1} justifyContent='center'>
                        {social.map((network) => (
                            <Link
                                display="block"
                                variant="body1"
                                href={network.url}
                                key={network.name}
                                sx={{ mb: 0.5, py: 2 }}
                                title={network.name}
                                target="_blank"
                            >

                                <network.icon />

                            </Link>
                        ))}
                    </Stack>






                </Grid>




                <Grid item xs={12} md={8} sx={{ textAlign: 'center', bgcolor: '', position: 'relative' }}>

                    <Typography className='temptitle' variant="h2" gutterBottom>{title}</Typography>

                    <Divider />
                    <div style={{ backgroundColor: '' }}>
                        <h4>I'm a web developer based out of New Jersey, with dedication to continuously learning about new web trends and concepts. With over five years of experience in web development and business, my expertise can help any company modernize with websites and applications that appeal to expanding clientele.</h4>
                    </div>


                    <Typography variant="h6" style={{ textAlign: 'center', backgroundColor: '', position: 'absolute', bottom: '0', left: '0', right: '0' }} gutterBottom>Here's a list of my most recent skills!</Typography>


                </Grid>

            </Grid>





            <Grid container style={{ display: 'flex', backgroundColor: 'whitesmoke', marginBottom: '40px', marginTop: '20px' }}>

                <Grid item xs={4} md={2}>
                    <ul>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>Javascript</li>
                        <li>ES6+</li>
                        <li>TypeScript</li>
                        <li>jQuery</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>Bash</li>
                    </ul>
                </Grid>
                <Grid item xs={4} md={2}>
                    <ul>
                        <li>ReactJS</li>
                        <li>React hooks</li>
                        <li>Redux</li>
                        <li>NextJS</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>SQLite</li>
                        <li>Google Firebase</li>
                        <li>Cloudinary</li>
                        <li>Mongoose</li>
                    </ul>
                </Grid>
                <Grid item xs={4} md={2}>
                    <ul>
                        <li>Sequelize</li>
                        <li>Prisma</li>
                        <li>localStorage</li>
                        <li>sessionStorage</li>
                        <li>MongoDB Compass</li>
                        <li>MongoDB Atlas</li>
                        <li>PG Admin</li>
                        <li>Excel</li>
                        <li>JSON</li>
                        <li>VSCode</li>
                        <li>Selenium</li>
                    </ul>
                </Grid>
                <Grid item xs={4} md={2}>
                    <ul>
                        <li>AWS(EC2 instance)</li>
                        <li>Heroku</li>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Restful API's</li>
                        <li>Postman</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                        <li>Ngrok</li>
                        <li>Stripe</li>
                        <li>User Authentication</li>
                    </ul>
                </Grid>
                <Grid item xs={4} md={2}>
                    <ul>
                        <li>Encryption</li>
                        <li>Crypto</li>
                        <li>BCryptJS</li>
                        <li>JWTokens</li>
                        <li>cookies</li>
                        <li>PassportJS</li>
                        <li>API development</li>
                        <li>Ajax/Axios</li>
                        <li>DiscordJS</li>
                        <li>Shopify</li>
                        <li>Wix</li>
                    </ul>
                </Grid>
                <Grid item xs={4} md={2}>
                    <ul>
                        <li>Chrome Extensions</li>
                        <li>Twilio API</li>
                        <li>Nodemailer</li>
                        <li>OBS</li>
                        <li>Capcut</li>
                        <li>API Tokens</li>
                        <li>Search Optimization</li>
                        <li>Responsive Design</li>

                    </ul>
                </Grid>

            </Grid>






        </div>
    )
};