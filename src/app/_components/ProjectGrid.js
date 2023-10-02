import { Button, Grid, Box, Link, Paper, Typography } from '@mui/material'
import Image from 'next/image';




export default function ProjectGrid() {



    return (
        <div style={{ backgroundColor: '' }}>


            <Typography py={1} variant='h3' textAlign={'center'} sx={{ bgcolor: '' }}>Featured Projects</Typography>









            <Grid container my={6} sx={{ height: '35vh', minHeight: '300px' }}>



                <Grid item xs={12} md={6} sx={{ bgcolor: '', textAlign: 'center', paddingRight: '5px', position: 'relative' }}>



                    <Typography style={{ backgroundColor: '', fontSize: '1.7em' }} variant="h5">Personal Website</Typography>



                    <Box style={{ backgroundColor: '', paddingTop: '1rem', paddingBottom: '.5rem' }}>
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://v4.material-ui.com/static/logo.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="" />
                    </Box>



                    <Typography style={{ backgroundColor: '', wordSpacing: '.5px', textAlign: 'left', paddingTop: '1.2rem', paddingBottom: '1.2rem' }}>I developed and designed a website using ReactJS and Bootstrap, hosted on Github Pages, to showcase my web presence, story, work experience, education, projects, and achievements my web presence, projects, and achievements in an interactive and visually-appealing format.</Typography>



                    <Box style={{ backgroundColor: '' }}>

                        <Button style={{ backgroundColor: '' }} variant="outlined">Check it out!</Button>
                    </Box>



                </Grid>







                <Grid item xs={12} md={6} style={{ position: 'relative', backgroundColor: '' }}>
                    <Image
                        src='/shopit.png'
                        alt='shopit'
                        // width={800}
                        // height={800}
                        // style={{ objectFit: 'contain', backgroundColor: '', width: '100%', height: 'auto' }}
                        // style={{ objectFit: 'contain' }}
                        fill={true}
                        // sizes="(max-width: 768px) 100vw"
                        style={{ borderRadius: '5px', paddingLeft: '5px' }}
                    />
                </Grid>








            </Grid>







            <Grid container my={6} sx={{ height: '35vh', minHeight: '300px' }}>
                <Grid item xs={12} md={6} style={{ position: 'relative' }}>
                    <Image src='/shopit.png' alt='shopit' fill={true} style={{ borderRadius: '5px', paddingRight: '5px' }} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: 'center', paddingLeft: '5px', position: 'relative' }}>
                    <Typography style={{ fontSize: '1.7em' }} variant="h5">Personal Website</Typography>
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
                    <Typography style={{ fontSize: '1.7em' }} variant="h5">Personal Website</Typography>
                    <Box style={{ paddingTop: '1rem', paddingBottom: '.5rem' }}>
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://v4.material-ui.com/static/logo.png" alt="" />
                        <img style={{ objectFit: 'contain', height: '40px', width: 'auto' }} src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="" />
                    </Box>
                    <Typography style={{ wordSpacing: '.5px', textAlign: 'left', paddingTop: '1.2rem', paddingBottom: '1.2rem' }}>I developed and designed a website using ReactJS and Bootstrap, hosted on Github Pages, to showcase my web presence, story, work experience, education, projects, and achievements my web presence, projects, and achievements in an interactive and visually-appealing format.</Typography>
                    <Button variant="outlined">Check it out!</Button>
                </Grid>
                <Grid item xs={12} md={6} style={{ position: 'relative' }}>
                    <Image src='/shopit.png' alt='shopit' fill={true} style={{ borderRadius: '5px', paddingLeft: '5px' }} />
                </Grid>
            </Grid>







        </div>
    )
};