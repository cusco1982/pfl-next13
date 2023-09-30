import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { Box, Divider } from "@mui/material";

import StandardImageList from './StandardImageList';


export default function Skills() {
    // const Img = styled('img')({
    //     margin: 'auto',
    //     display: 'block',
    //     maxWidth: '100%',
    //     maxHeight: '100%',
    //   });

    // img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',




    const pillars = [
        {
            title: 'Languages',
            paragraph: 'My favorite languages for systems programming, software engineering, and data analysis.',
            itemData: [

                {
                    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
                    title: 'Javascript',
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
                    title: 'Python',
                },
                {
                    img: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
                    title: 'HTML/CSS',
                },
                {
                    img: 'https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png',
                    title: 'Typescript',
                },

            ]
        },
        {
            title: 'Front-End',
            paragraph: 'My preferred technologies for front-end web development and component design.',
            itemData: [

                {
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
                    title: 'React',
                },
                {
                    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
                    title: 'Bootstrap',
                },
                {
                    img: 'https://v4.material-ui.com/static/logo.png',
                    title: 'MaterialUI',
                },
                {
                    img: 'https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png',
                    title: 'Nextjs',
                },

            ]

        },
        {
            title: 'Back-End',
            paragraph: 'My preferred technologies for back-end web programming and database architecture.',
            itemData: [

                {
                    img: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
                    title: 'Nodejs',
                },
                {
                    img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png',
                    title: 'Express',
                },
                {
                    img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png',
                    title: 'PostgreSQL',
                },
                {
                    img: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png',
                    title: 'MongoDB',
                },

            ]

        },
        {
            title: 'Tools',
            paragraph: 'My favorite tools for version control, code editing, and container orchestration.',
            itemData: [

                {
                    img: 'https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png',
                    title: 'git',
                },
                {
                    img: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png',

                    title: 'VSCode',
                },
                {
                    img: 'https://foundations.projectpythia.org/_images/GitHub-logo.png',
                    title: 'Github',
                },
                {
                    img: 'https://static-00.iconduck.com/assets.00/docker-icon-512x438-ga1hb37h.png',
                    title: 'Docker',
                },

            ]
        },
    ];


    // postman
    // SQLite
    // mongodb Compass
    // brew
    // pgAdmin
    // MySQL
    // Ajax/Axios?
    // Matlab
    // Excel
    // Meteor.js?
    // Firebase
    // Sequelize?
    // Heroku
    // AWS /ec2 instance
    // API development

    return (
        <Grid container spacing={2} my={10}>




            {pillars.map((pillar, index) => (


                <Grid key={index} item xs={12} sm={6} md={3}>

                    <Typography textAlign={'center'} component="h3" variant="h5">{pillar.title}</Typography>

                    <StandardImageList images={pillar.itemData} />

                    <Typography variant="subtitle1" textAlign={'center'}  paragraph>{pillar.paragraph}</Typography>

                </Grid>


            ))}





        </Grid>
    )
};