import { Suspense } from "react"
import getAlbum from "@/app/_lib/getAlbum"
import getAlbumPhotos from "@/app/_lib/getAlbumPhotos"
import AlbumPhotos from "./components/AlbumPhotos"





export async function generateMetadata({params}){


    return {
        title: params.album,
        description: `This is the page of ${params.album}`
    }
}







export default async function projectPage({ params }) {


    console.log('albumId', params)

    const albumId = params.album

    const albumData = getAlbum(albumId)
    const albumPhotosData = getAlbumPhotos(albumId)

    // const [album, albumPhotos] = await Promise.all([albumData, albumPhotosData])
 
    const album = await albumData



    return (
        <>

            <h2>{album.userId}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>

                {/* <AlbumPhotos photos={albumPhotos} /> */}
                <AlbumPhotos promise={albumPhotosData} />

            </Suspense>


        </>
    )
};