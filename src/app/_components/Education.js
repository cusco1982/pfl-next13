import { Box, Divider, Grid, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Education() {



    return (
        <Box pb={4} sx={{
            flexGrow: 1,
            '& .education-divider': {
                transition: 'ease-in-out .5s'
            },
            '&:hover': {
                '& .education-divider': {
                    bgcolor: '#cc0033',
                    transition: 'ease-in-out .5s'
                }
            }
        }}>


            <Typography component="h2" variant="h2" py={1}>Education</Typography>


            {/* <Grid container sx={{ mt: 2 }}>
                <Grid item xs={1} sx={{ m: 0, pt: .5 }}>
                    <img src="https://www.heraldry-wiki.com/heraldrywiki/images/4/48/Rutgers_University.jpg" alt="Rutgers Crest" style={{ objectFit: 'contain', height: '100px', width: 'auto' }} />
                </Grid>
                <Grid item xs={11} pb={4}>
                    <Typography component="h3" variant="h4" sx={{ pb: 1, fontWeight: '400' }}>Rutgers University</Typography>
                    <Typography component="h5" variant="h6" sx={{ fontWeight: '400' }} >Rutgers Coding Bootcamp</Typography>
                    <Typography component="h3" variant="subtitle" sx={{ fontWeight: '400', wordSpacing: '.2em' }} >November 2019</Typography>
                </Grid>
            </Grid> */}




            <Grid pb={4} container sx={{ mt: 2 }}>



                <Grid item xs={1} sx={{ m: 0, pt: .5 }}>
                    <img src="https://www.heraldry-wiki.com/heraldrywiki/images/4/48/Rutgers_University.jpg" alt="Rutgers Crest" style={{ objectFit: 'contain', height: '100px', width: 'auto' }} />
                </Grid>





                <Grid item xs={11} md={5}>


                    
                    <Typography component="h3" variant="h4" sx={{ fontWeight: '400' }}>Rutgers Coding Bootcamp</Typography>

                    <Typography component="h5" gutterBottom variant="h6" sx={{ fontWeight: '400', wordSpacing: '.2em' }} >Rutgers University</Typography>

                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex'}}>
                            <CalendarMonthIcon />
                            <Typography component="h4" variant="subtitle" sx={{ fontWeight: '400', wordSpacing: '.2em' }} px={1} >November 2019</Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <PlaceIcon />
                            <Typography component="h4" variant="subtitle" sx={{ fontWeight: '400', wordSpacing: '.2em' }} pl={.5}>New Brunswick, NJ</Typography>
                        </Box>
                    </Box>




                </Grid>




                <Grid item xs={12} md={6}>
                    <ul>
                        <li>Developed a web application using React and Ruby on Rails.</li>

                        <li>Learned and used technologies such as HTML, CSS, JavaScript, and SQL.</li>

                        <li>Collaborated with a team on a group project to build a full-stack web application.</li>
                    </ul>
                </Grid>





            </Grid>







            <Divider className='education-divider' />

        </Box>
    )
};