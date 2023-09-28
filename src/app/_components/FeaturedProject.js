import * as React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { Box, Divider } from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';
import getLanguages from '../_lib/github/getLanguages';


export default async function FeaturedProject(props) {
  const RepoIcon = <SvgIcon fill="green" viewBox="0 0 24 24"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo mr-1 color-fg-muted"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg></SvgIcon>
  const { project } = props;


  let featuredLanguagesArr = []

  const languages = await getLanguages(project.name)
  
  // console.log(languages)

  
  console.log(Object.keys(languages))

  // assign Classname and add this css
  // https://stackoverflow.com/questions/5577364/make-the-first-character-uppercase-in-css
  const visibility = (project.visibility === 'public') ? 'Public' : project.visibility




  // console.log('languages: ', proj.languages_url)
  // console.log('cloneLink: ', proj.clone_url)
  // console.log('repoLink: ', proj.html_url)





  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={project.url}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>




            <Box sx={{ display: 'flex' }}>
              <Typography component="h3" pt={.5} variant="h5">
                {RepoIcon}
              </Typography>

              <Typography component="h3" variant="h5" mx={1}>
                {project.name}
              </Typography>

              <Typography component="h5" variant="h8" ml={'auto'}>
                <div style={{ border: '1px solid grey', borderRadius: "25px", paddingLeft: '4px', paddingRight: '4px', fontWeight: "400" }}>
                  {visibility}
                </div>
              </Typography>
            </Box>


            <Typography variant="subtitle1" paragraph>
              {project.description}
            </Typography>

            <Divider />

            <Box sx={{ display: 'flex' }}>
              <Typography variant="subtitle1" color="text.secondary">
                Languages:
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" ml={'auto'}>
                Last updated: {project.updated_at}
              </Typography>
            </Box>








          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
};

// FeaturedProject.propTypes = {
//   post: PropTypes.shape({
//     date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageLabel: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };