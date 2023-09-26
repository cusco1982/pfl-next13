import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import Markdown from './Markdown';
import Box from '@mui/material/Box';


function Main(props) {
  const {
    //  posts,
    title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >




      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />


      <Box className='markdown' sx={{ mt: 1, typography: 'body1' }}>


        <div>
          <h1>Sample blog post</h1>
          <header>April 1 2020 by Olivier</header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium exercitationem in suscipit corporis autem, quidem optio cupiditate reprehenderit. Eaque nostrum ab possimus accusamus expedita quo odio eum blanditiis dolor sit earum vel reprehenderit repellendus corporis consequuntur, similique magnam iste recusandae delectus eius aspernatur non dolores. Consequatur qui rem perspiciatis!</p>
        </div>



        <div>
          <h1>Sample blog post</h1>
          <header>April 1 2020 by Olivier</header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium exercitationem in suscipit corporis autem, quidem optio cupiditate reprehenderit. Eaque nostrum ab possimus accusamus expedita quo odio eum blanditiis dolor sit earum vel reprehenderit repellendus corporis consequuntur, similique magnam iste recusandae delectus eius aspernatur non dolores. Consequatur qui rem perspiciatis!</p>
        </div>




        <div>
          <h1>Sample blog post</h1>
          <header>April 1 2020 by Olivier</header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium exercitationem in suscipit corporis autem, quidem optio cupiditate reprehenderit. Eaque nostrum ab possimus accusamus expedita quo odio eum blanditiis dolor sit earum vel reprehenderit repellendus corporis consequuntur, similique magnam iste recusandae delectus eius aspernatur non dolores. Consequatur qui rem perspiciatis!</p>
        </div>


      </Box>


      {/* {posts.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}






    </Grid>
  );
}

Main.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;