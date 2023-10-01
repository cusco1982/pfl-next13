import { Box, Divider, Grid, Typography } from '@mui/material';

export default function Education() {



    return (
        <Box sx={{
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


            <Grid container sx={{ mt: 2 }}>
                <Grid item xs={1} sx={{ m: 0, pt: .5 }}>
                    <img src="https://www.heraldry-wiki.com/heraldrywiki/images/4/48/Rutgers_University.jpg" alt="Rutgers Crest" style={{ objectFit: 'contain', height: '100px', width: 'auto' }} />
                </Grid>
                <Grid item xs={11} pb={4}>
                    <Typography component="h3" variant="h4" sx={{ pb: 1, fontWeight: '400' }}>Rutgers University</Typography>
                    <Typography component="h5" variant="h6" sx={{ fontWeight: '400' }} >Rutgers Coding Bootcamp</Typography>
                    <Typography component="h3" variant="subtitle" sx={{ fontWeight: '400', wordSpacing: '.2em' }} >November 2019</Typography>
                </Grid>
            </Grid>

            <Divider className='education-divider' />

        </Box>
    )
};