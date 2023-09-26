import { Avatar, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



// export async function generateMetadata({ promise }) {
//     return {
//         title: promise,
//         description: `This is the page of ${promise}`
//     }
// };


// export const metadata = {
//     title: 'Projects',
// };




export default function projectCard({ promise }) {


    return (
        <article key={promise.id} style={{backgroundColor:"pink"}}>


            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>




            <Typography my={2} component="h1" variant="h5">Name: {promise.name}</Typography>
            <Typography my={2}>Description: {promise.description}</Typography>
            <Typography my={2}>github URL: {promise.html_url}</Typography>
            <Typography my={2}>Description: {promise.description}</Typography>
            <Typography my={2}>Languages API: {promise.languages_url}</Typography>
            <Typography my={2}>Contents/files API: {promise.contents_url}</Typography>
            <Typography my={2}>Updated at: {promise.updated_at}</Typography>
            <Typography my={2}>Clone URL: {promise.clone_url}</Typography>
            <Typography my={2}>Homepage linked to githubRepo: {promise.homepage}</Typography>
            <Typography my={2}>Topics: {promise.topics}</Typography>
            <Typography my={2}>Visibility: {promise.visibility}</Typography>






        </article>
    )
};