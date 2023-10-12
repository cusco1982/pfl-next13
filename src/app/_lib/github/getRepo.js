export default async function getRepo(projectName) {

    const fiveDays = (5 * 24 * 60 * 60 * 1000)

    // get specific Repo data
    const res = await fetch(`https://api.github.com/repos/cusco1982/${projectName}`, { next: { revalidate: fiveDays } })


    if (!res.ok) throw new Error('getRepo: failed to fetch data')
    return res.json()
};