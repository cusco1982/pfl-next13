import getAllAlbums from "../_lib/getAllAlbums";
import Link from "next/link";

export const metadata = {
    title: 'Projects',
};




export default async function ProjectsPage() {

    const projectsData = getAllAlbums()
    const projects = await projectsData



    const content = (

        <section>
            <h2><Link href={'/'}>Back to Home</Link></h2>
            <br />

            {projects.map(project => {
                return (

                    <p key={project.id}>


                        <Link href={`/projects/${project.id}`}>user{project.userId} : album {project.id}</Link>


                        <br />
                    </p>

                )
            })}
        </section>
    )

    return content
};