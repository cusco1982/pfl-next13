


export default async function AlbumPhotos({ promise }) {

    const photos = await promise

    console.log('promise: ',promise)


    const content = photos.map(photo => {
        return (
            <article key={photo.id}>



                <h2>Photo #{photo.id}</h2>
                <h3>{photo.title}</h3>
                <p>{photo.url}</p>

                <br />

            </article>
        )
    })



    return content;
}
