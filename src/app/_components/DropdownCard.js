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
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DropdownCard() {

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {setExpanded(!expanded)};
  return (
    <Card sx={{ maxWidth: 345}}>



      <CardContent>
        <ul>
          <li>Developed a web application using React and Ruby on Rails.</li>
          <li>Learned and used technologies such as HTML, CSS, JavaScript, and SQL.</li>
          <li>Collaborated with a team on a group project to build a full-stack web application.</li>
        </ul>
      </CardContent>



      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* See more */}
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>




      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ul>
            <li>Developed a web application using React and Ruby on Rails.</li>
            <li>Learned and used technologies such as HTML, CSS, JavaScript, and SQL.</li>
            <li>Collaborated with a team on a group project to build a full-stack web application.</li>
          </ul>
        </CardContent>
      </Collapse>




    </Card>
  );
}