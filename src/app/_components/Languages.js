'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';




import { Box, Divider, Grid, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';









const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function Languages() {

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => { setExpanded(!expanded) };
  return (
    // <Card sx={{ maxWidth: 345}}>




    <Box pb={4} sx={{


      flexGrow: 1,


      '& .education-divider': {
        transition: 'ease-in-out .5s'
      },


      '&:hover': {

        '& .education-divider': {
          bgcolor: '#cc0033',
          transition: 'ease-in-out .5s'
        },

      },


    }}>










      <Typography component="h2" variant="h2" py={1}>Skills</Typography>

      <Card sx={{ bgcolor: '' }}>







        <CardContent sx={{ bgcolor: '' }}>
          {/* <Grid container sx={{ mt: 2 }}> */}



          <Grid container>
              <Grid item xs={12} md={6}>
                <ul>
                  <li>Javascript</li>
                  <li>Javascript</li>
                  <li>Javascript</li>

                </ul>
              </Grid>
              <Grid item xs={12} md={6}>
                <ul>
                  <li>Developed a web application using React and Ruby on Rails.</li>
                  <li>Learned and used technologies such as HTML, CSS, JavaScript, and SQL.</li>
                  <li>Collaborated with a team on a group project to build a full-stack web application.</li>
                </ul>
              </Grid>
            </Grid>
            



          {/* </Grid> */}
        </CardContent>








        <CardActions disableSpacing style={{ padding: '', backgroundColor: "", justifyContent: 'center', display: expanded && 'none' }}>



          <ExpandMore
            style={{ padding: '0', backgroundColor: '', margin: 'auto' }}
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >


            <Typography>See more</Typography>
            <ExpandMoreIcon />

          </ExpandMore>



        </CardActions>





        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ bgcolor: '', padding: '0', height: '20' }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <ul>
                  <li>Developed a web application using React and Ruby on Rails.</li>
                  <li>Learned and used technologies such as HTML, CSS, JavaScript, and SQL.</li>
                  <li>Collaborated with a team on a group project to build a full-stack web application.</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={6}>
                <ul>
                  <li>Developed a web application using React and Ruby on Rails.</li>
                  <li>Learned and used technologies such as HTML, CSS, JavaScript, and SQL.</li>
                  <li>Collaborated with a team on a group project to build a full-stack web application.</li>
                </ul>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>











        <CardActions disableSpacing style={{ padding: '', backgroundColor: "", justifyContent: 'center', display: !expanded && 'none' }}>




          <ExpandMore
            style={{ padding: '0', backgroundColor: '', margin: '0' }}
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Typography>See less</Typography>
            <CloseIcon />
          </ExpandMore>



        </CardActions>













      </Card>

      <Divider className='education-divider' />


    </Box>
  );
}