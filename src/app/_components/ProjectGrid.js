'use client'
import * as React from 'react';
import { Button, Grid, Box, Link, Paper, Typography } from '@mui/material'
import Image from 'next/image';

import styles from './projectgrid.module.css';


import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const stylemui = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height:'60vh',
    bgcolor: 'black',
    // bgcolor: 'background.paper',
    boxShadow: 24,
};




export default function ProjectGrid() {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const [openWJ, setOpenWJ] = React.useState(false);
    const handleOpenWJ = () => setOpenWJ(true);
    const handleCloseWJ = () => setOpenWJ(false);

    const [openCWE, setOpenCWE] = React.useState(false);
    const handleOpenCWE = () => setOpenCWE(true);
    const handleCloseCWE = () => setOpenCWE(false);


    return (
        <div style={{ backgroundColor: '' }}>


            <Typography py={1} variant='h3' textAlign={'center'} sx={{ bgcolor: '' }}>Featured Projects</Typography>







            <Grid container my={6} sx={{ height: '35vh', minHeight: '300px' }}>

                <Grid item xs={12} md={6} sx={{ bgcolor: '', textAlign: 'center', paddingRight: '5px', position: 'relative' }}>

                    <Typography style={{ backgroundColor: '', fontSize: '1.7em' }} variant="h5">ecommerce</Typography>

                    <Box style={{ backgroundColor: '', paddingTop: '1rem', paddingBottom: '.5rem' }}>
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://v4.material-ui.com/static/logo.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="" />
                    </Box>

                    <Typography style={{ backgroundColor: '', wordSpacing: '.5px', textAlign: 'left', paddingTop: '1.2rem', paddingBottom: '1.2rem' }}>I developed and designed a website using ReactJS and Bootstrap, hosted on Github Pages, to showcase my web presence, story, work experience, education, projects, and achievements my web presence, projects, and achievements in an interactive and visually-appealing format.</Typography>

                    <Button style={{ backgroundColor: '' }} variant="outlined">Check it out!</Button>
                </Grid>




                <Grid
                    className={styles.projectImg}
                    item xs={12} md={6} style={{ position: 'relative', backgroundColor: '' }}>
                    <Image
                        src='/shopit.png'
                        alt='shopit'
                        fill={true}
                        style={{ borderRadius: '5px', paddingLeft: '5px' }}
                        onClick={handleOpen}
                    />




                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={stylemui}>
                                <Image
                                    src='/shopit.png'
                                    alt='shopit'
                                    fill={true}
                                    // style={{objectFit:'contain'}}
                                />
                            </Box>
                        </Fade>
                    </Modal>





                </Grid>

            </Grid>







            <Grid container my={6} sx={{ height: '35vh', minHeight: '300px' }}>
                <Grid className={styles.projectImg} item xs={12} md={6} style={{ position: 'relative' }}>
                    <Image src='/constructionTemplate.png' alt='constructionTemplate' fill={true} style={{ borderRadius: '5px', paddingRight: '5px' }} onClick={handleOpenWJ}/>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={openWJ}
                        onClose={handleCloseWJ}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={openWJ}>
                            <Box sx={stylemui}>
                                <Image
                                    src='/constructionTemplate.png'
                                    alt='constructionTemplate'
                                    fill={true}
                                    style={{objectFit:'contain'}}
                                />
                            </Box>
                        </Fade>
                    </Modal>
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: 'center', paddingLeft: '5px', position: 'relative' }}>
                    <Typography style={{ fontSize: '1.7em' }} variant="h5">constructionTemplate</Typography>
                    <Box style={{ paddingTop: '1rem', paddingBottom: '.5rem' }}>
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://v4.material-ui.com/static/logo.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="" />
                    </Box>
                    <Typography style={{ wordSpacing: '.5px', textAlign: 'left', paddingTop: '1.2rem', paddingBottom: '1.2rem' }}>I developed and designed a website using ReactJS and Bootstrap, hosted on Github Pages, to showcase my web presence, story, work experience, education, projects, and achievements my web presence, projects, and achievements in an interactive and visually-appealing format.</Typography>
                    <Button variant="outlined">Check it out!</Button>
                </Grid>
            </Grid>







            <Grid container my={6} sx={{ height: '35vh', minHeight: '300px' }}>
                <Grid item xs={12} md={6} sx={{ textAlign: 'center', paddingRight: '5px', position: 'relative' }}>
                    <Typography style={{ fontSize: '1.7em' }} variant="h5">chrome_weather_extension</Typography>
                    <Box style={{ paddingTop: '1rem', paddingBottom: '.5rem' }}>
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://v4.material-ui.com/static/logo.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="" />
                    </Box>
                    <Typography style={{ wordSpacing: '.5px', textAlign: 'left', paddingTop: '1.2rem', paddingBottom: '1.2rem' }}>I developed and designed a website using ReactJS and Bootstrap, hosted on Github Pages, to showcase my web presence, story, work experience, education, projects, and achievements my web presence, projects, and achievements in an interactive and visually-appealing format.</Typography>
                    <Button variant="outlined">Check it out!</Button>
                </Grid>
                <Grid className={styles.projectImg} item xs={12} md={6} style={{ position: 'relative' }}>
                    <Image onClick={handleOpenCWE} src='/chrome_weather_extension.png' alt='chrome_weather_extension' fill={true} style={{ borderRadius: '5px', paddingLeft: '5px' }} />
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={openCWE}
                        onClose={handleCloseCWE}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={openCWE}>
                            <Box sx={stylemui}>
                                <Image
                                    src='/chrome_weather_extension.png'
                                    alt='chrome_weather_extension'
                                    fill={true}
                                />
                            </Box>
                        </Fade>
                    </Modal>
                </Grid>
            </Grid>







        </div>
    )
};