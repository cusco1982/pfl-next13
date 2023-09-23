export default async function getAllAlbums() {


    const res = await fetch('https://jsonplaceholder.typicode.com/albums')


    if (!res.ok) throw new Error('getAllAlbums: failed to fetch data')
    return res.json()
};