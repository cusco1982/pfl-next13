'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import styles from './mainfeaturedpost.module.css'


import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const stylemui = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  height: '60vh',
  bgcolor: 'black',
  boxShadow: 24,
};




function MainFeaturedPost(props) {
  const { post } = props;


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <>

      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${post.image})`,
        }}
      // onClick={handleOpen}

      >


        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}


        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />

        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph textAlign={'left'}>
                {post.description}
              </Typography>
              <Link variant="subtitle1" href="/projects/ecommerce" style={{ color: 'red' }}>
                {post.linkText}
              </Link>
            </Box>
          </Grid>



          <Grid onClick={handleOpen} item md={6} className={styles.videoDemo}>

            <Box
              sx={{
                position: 'relative',
                textAlign: 'center',
              }}
              style={{ top: '25%' }}
            >

              <Typography component="h1" variant="h3" color="inherit" gutterBottom>Play demo</Typography>

              <PlayCircleIcon className={styles.playIcon} />

            </Box>


          </Grid>









        </Grid>


      </Paper>



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
            <video autoplay controls style={{ width: '100%', height: 'auto' }}><source src="/ecommerceFF.mp4" type="video/mp4" /></video>
          </Box>
        </Fade>
      </Modal>




    </>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
