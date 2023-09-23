
export default async function getAlbum(id) {


  
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)


  if (!res.ok) throw new Error('getAlbum: failed to fetch album')
  return res.json()
};