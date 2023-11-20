import * as React from 'react';
// import PropTypes from 'prop-types';

import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material'

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

import HeaderNav from './HeaderNav';



// export default function Header(props) {
export default function Header() {



  // const { sections, title } = props

  return (


    <Container
      maxWidth="1"
      // maxWidth="lg"
      style={{
        position: "fixed",
        // backgroundColor: "orange",
        top: "0",
        zIndex: "1000",
        left: "0",
        right: "0",
        padding: '0'

      }}>




      <HeaderNav />





    </Container>
  )
};



// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };