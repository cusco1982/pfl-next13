// import Link from 'next/link'
// import styles from './page.module.css'
import { Typography } from "@mui/material";

import getUser from './_lib/github/getUser';

import About from './_components/About';


import Overlay from './_components/Overlay';


import MainFeaturedPost from './_components/MainFeaturedPost';
// import FeaturedPost from './_components/FeaturedPost';
import FeaturedProject from "./_components/FeaturedProject";

import Main from './_components/Main';
import Sidebar from './_components/Sidebar';


// import Gallery from '../components/Gallery'
import { Container } from '@mui/material';

import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import getAllRepos from "./_lib/github/getAllRepos";

import Skills from "./_components/Skills";

// import Education from './_components/Education';
import DropdownCard from "./_components/DropdownCard";

import ProjectGrid from "./_components/ProjectGrid";

import Languages from './_components/Languages'

const mainFeaturedPost = {
  title: 'e-commerce',
  description:

    // "This portfolio was made using nextjs13, materialUI, postgresqlDB, and packages such as Prisma, nodemailer and more!",
    "MERN Full-stack e-commerce site using React, Redux, Nodejs, and MongoDB. Includes user-authentication, Stripe payments, and more!",

  image: '/shopit.png',
  // image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};
const featuredPosts = [
  {
    title: 'ecommerce',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: 'https://github.com/cusco1982/ecommerce'
  },
  {
    title: 'constructionTemplate',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: 'https://github.com/cusco1982/constructionTemplate'
  },
  {
    title: 'constructionTemplate',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: 'https://github.com/cusco1982/constructionTemplate'
  },
  {
    title: 'constructionTemplate',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: 'https://github.com/cusco1982/constructionTemplate'
  },




];
// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/cusco1982' },
//     { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/StardustSake' },
//     { name: 'LinkedIn', icon: TwitterIcon, url: 'https://www.linkedin.com/in/julian-ayllon/' },
//     { name: 'Discord', icon: TwitterIcon, url: '#' },
//     { name: 'LinkTree', icon: TwitterIcon, url: '#' },
//     { name: 'Facebook', icon: FacebookIcon, url: '#' },
//   ],
// };


export default async function Home() {
  const user = await getUser()
  const projects = await getAllRepos()

  let featuredProjIndex = [28, 16, 79, 61]
  const featuredProjArr = featuredProjIndex.map(item => projects[item])

  return (
    // <main className={styles.main}>

    <>
      <Overlay />

      <Container maxWidth="lg" id='mainContent' style={{ scrollMarginTop: '60px', backgroundColor:'' }}>

        <About />

        <MainFeaturedPost post={mainFeaturedPost} />



        {/* <Education /> */}
        <DropdownCard />





        {/* <Languages /> */}

        <Skills />


        <ProjectGrid />


        <Typography variant="h3" textAlign={'center'} style={{fontWeight:'300', paddingBottom:'40px'}} gutterBottom>
          {/* <u>Projects</u> */}
          <u>Repositories</u>
        </Typography>

        <Grid container pb={10} spacing={4}>
          {featuredProjArr.map((project, index) => (
            <FeaturedProject key={index} project={project} />
          ))}
        </Grid>









        {/* <Grid container spacing={5} sx={{ mt: 3 }}> */}
        {/* <Main title="From the firehose"/> */}
        {/* <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          /> */}
        {/* </Grid> */}






        {/* <>
          <Typography my={2}>login: {user.login}</Typography>
          <Typography my={2}>avatar URL: {user.avatar_url}</Typography>
          <Typography my={2}>github: {user.html_url}</Typography>
          <Typography my={2}>repos api: {user.repos_url}</Typography>
          <Typography my={2}>email: {user.email}</Typography>
          <Typography my={2}>name: {user.name}</Typography>
          <Typography my={2}>company: {user.company}</Typography>
          <Typography my={2}>blog: {user.blog}</Typography>
          <Typography my={2}>location: {user.location}</Typography>
          <Typography my={2}>hireable: {user.hireable}</Typography>
          <Typography my={2}>bio: {user.bio}</Typography>
          <Typography my={2}>twitter username: {user.twitter_username}</Typography>
          <Typography my={2}>public repos: {user.public_repos}</Typography>
          <Typography my={2}>followers: {user.followers}</Typography>
          <Typography my={2}>following: {user.following}</Typography>
          <Typography my={2}>created: {user.created_at}</Typography>
          <Typography my={2}>updated at: {user.updated_at}</Typography>
        </> */}
      </Container>
    </>

    // </main>
  )
};