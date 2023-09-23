
export default async function getAlbumPhotos(albumId) {


    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)




    if (!res.ok) throw new Error('getRepo: failed to fetch photos')
    return res.json()
};