import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import CardActionArea from '@mui/material/CardActionArea';
import SvgIcon from '@mui/material/SvgIcon';
import { Box, Divider } from "@mui/material";



import getAllRepos from "../_lib/github/getAllRepos";

// import { Suspense } from "react";



export const metadata = {
    title: 'Projects',
};



export default async function allProjectsPage() {
    const RepoIcon = <SvgIcon fill="green" viewBox="0 0 24 24"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo mr-1 color-fg-muted"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg></SvgIcon>

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



    // const randomPic = 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTU1MzExOTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'



    





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









                <Container sx={{ py: 8, bgcolor: 'purple' }} maxWidth="md">



                    <Grid container spacing={4} style={{ backgroundColor: 'orange' }}>








                        {featuredProjArr.map((project, index) => (
                            <Grid key={index} item xs={12} md={6} xl={6} sx={{ bgcolor: "green" }}>
                                <CardActionArea component="a" href={'#'}>
                                    <Card sx={{ display: 'flex', bgcolor:'pink' }}>
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
                                                        {project.visibility === 'public' ? 'Public' : project.visibility}

                                                    </div>
                                                </Typography>
                                            </Box>


                                            <Typography py={1} variant="subtitle1" paragraph>
                                                {project.description}
                                                {/* project description */}
                                            </Typography>

                                            <Divider />





                                            <Box pt={2} sx={{ display: 'flex' }}>
                                                <Typography variant="subtitle1" color="text.secondary" style={{ display: 'flex' }}>


                                                    Languages: languages
                                                    {/* {language} */}


                                                </Typography>

                                                <Typography variant="subtitle1" color="text.secondary" ml={'auto'}>
                                                    Last updated: 7
                                                    {/* {diffDays}  */}
                                                    days ago
                                                </Typography>

                                            </Box>








                                        </CardContent>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        ))}








                    </Grid>
                </Container>
























                {/* <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {featuredProjArr.map((project, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card sx={{ height: "100%", display: "flex", flexDirection: "column", }}>
                                    <CardMedia
                                        component="div"
                                        sx={{pt: "56.25%",}}
                                        image={randomPic}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">{project.name}</Typography>
                                        <Typography>{project.description}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={`projects/${project.name}`}>
                                            <Button size="small">View</Button>
                                        </Link>
                                        <Link href={project.html_url} target="_blank">
                                            <Button size="small">Github</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container> */}
            </main>
        </>
    )
};