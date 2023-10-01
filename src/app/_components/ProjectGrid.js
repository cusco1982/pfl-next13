import { Suspense } from "react"
import { Avatar, Button, Grid, Box, Link, Paper, Typography } from '@mui/material'
import Card from "./components/Card";

// import getAllRepos from "../_lib/github/getAllRepos";



// function Loading() {
//     return <h2>🌀 Loading...</h2>;
// };


export default function projectGrid() {



    return (
        <>
            <Grid container component="main" sx={{ height: '70vh' }}>



                <Grid item xs={12} sm={8} md={7} component={Paper} elevation={1} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'orange',
                        }}
                    >
                        

                        <Suspense>


                            <Card promise={project} />


                        </Suspense>



                    </Box>
                </Grid>



                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={5}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />




            </Grid>






        </>
    )
};