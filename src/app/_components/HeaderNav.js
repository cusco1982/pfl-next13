'use client'
import { useEffect, useState, useRef } from 'react';
import { Button, Container, Grid, Link, Toolbar, Typography } from '@mui/material';
import styles from './header.module.css';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';




export default function HeaderNav() {
    const sections = [
        { title: '<Julian />', url: '/' },
        // { title: 'Home', url: '/' },
        { title: 'Projects', url: '/projects' },
        // { title: 'Contact', url: '/contact' },
        { title: 'Resume', url: '/#' },
        { title: 'About', url: '/about' },
        { title: 'Skills', url: '#' },
    ];
    const title = 'Julian Ayllon'



    const prevScrollY = useRef(0);
    // const [goingUp, setGoingUp] = useState(false);
    const [active, setActive] = useState(false);



    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        // if (prevScrollY.current < currentScrollY && goingUp) {
        //     setGoingUp(false);
        // }
        // if (prevScrollY.current > currentScrollY && !goingUp) {
        //     setGoingUp(true);
        // }
        prevScrollY.current = currentScrollY;
        if (currentScrollY > 200) {
            setActive(true)
        } else {
            setActive(false)
        }
        // console.log(goingUp, currentScrollY);
    };




    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [
        // goingUp,
        active, handleScroll]);





    return (
        <div>



            <Toolbar className={active ? styles.topNavSecond : styles.topNavFirst} sx={{ borderBottom: 1, borderColor: 'divider', display: 'none' }}>

                <Button size="small">Contact Me</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    DOWNLOAD CV
                </Button>

            </Toolbar>






            <Toolbar className={active ? styles.second : styles.first} component="nav" variant="dense" sx={{ justifyContent: '', overflowX: 'auto' }}>
                <Grid container m={0} spacing={2}>



                    <Grid item xs={8} style={{ backgroundColor: "" }}>
                        {sections.map((section) => (
                            <Link
                                color="inherit"
                                noWrap
                                key={section.title}
                                variant="body2"
                                href={section.url}
                                sx={{ px: 1, mx: 1, flexShrink: 0, textDecoration: 'none', fontSize: '1.2rem', fontWeight: '300' }}
                            >
                                {section.title}
                            </Link>
                        ))}
                    </Grid>


                    <Grid item xs={4} sx={{ p: 1, flexShrink: 0, textDecoration: 'none', fontSize: '1.2rem', fontWeight: '400', textAlign: 'center' }} style={{ backgroundColor: "" }}>
                        <div>
                            <Button variant="outlined" size="medium" style={{ color: 'black', border: '1px solid black' }}>
                                DOWNLOAD CV
                            </Button>
                        </div>
                    </Grid>




                </Grid>
            </Toolbar>




        </div>
    )
};