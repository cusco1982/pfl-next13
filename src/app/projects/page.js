import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import getAllRepos from "../_lib/github/getAllRepos";

// import { Suspense } from "react";



export const metadata = {
    title: 'Projects',
};



export default async function allProjectsPage() {

    // users/user/repos?per_page=100
    const projects = await getAllRepos()


    // last 6 months projects
    let latestProjectsArr = []
    // current month projects
    let currentMonthArr = []
    let featuredProjIndex = [28, 21, 16, 61, 79, 84, 72, 6, 82, 63, 87, 42, 43, 25, 29, 55]
    const featuredProjArr = featuredProjIndex.map(item => projects[item])



    const mappedArr = projects.map((project) => {

        // diff between CurrentMonth & Month/Year last updated
        const currentMonth = new Date().getMonth() + 1
        const projectMonth = parseInt((project.updated_at).split('-')[1])
        const projectYear = parseInt((project.updated_at).split('-')[0])
        const monthDiff = Math.abs(currentMonth - projectMonth)


        // projects worked on this month
        projectYear > 2022 && monthDiff < 1 && currentMonthArr.push(project)
        // projects worked on in last 6 months
        projectYear > 2022 && monthDiff < 6 && latestProjectsArr.push(project)
    })



    const content = (

        <section>

            {featuredProjArr.map((project, index) => {
                return (

                    <p key={project.id}>

                        <Link href={`/projects/${project.name}`}>Project{index}: {project.name}</Link>

                    </p>

                )
            })}

        </section>
    )


    // ecommerce store picture
    // https://images.ctfassets.net/lzny33ho1g45/78B8YPMVGUMAPbgbyyjXYG/4a11f7407a122ccfb72d895ba171a9bd/Ecwid_screenshot?w=1400
    const randomPic = 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTU1MzExOTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'






    return (


        <>
            <main>



                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Album layout
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph
                        >
                            Something short and leading about the collection below—its
                            contents, the creator, etc. Make it short and sweet, but not too
                            short so folks don&apos;t simply skip over it entirely.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Secondary action</Button>
                        </Stack>
                    </Container>
                </Box>



                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {featuredProjArr.map((project, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: "56.25%",
                                        }}

                                        image={randomPic}

                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">

                                            {project.name}

                                        </Typography>
                                        <Typography>

                                            {project.description}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>



                                        <Link href={`projects/${project.name}`}>

                                            <Button size="small">
                                                View
                                            </Button>
                                        </Link>



                                        <Link href={project.html_url} target="_blank">
                                            <Button size="small">Github</Button>
                                        </Link>



                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>




            </main>
        </>
    )
};