export default async function getAllRepos() {

    const fiveDays = (5 * 24 * 60 * 60 * 1000)

    // get first 100 repos
    const res = await fetch('https://api.github.com/users/cusco1982/repos?per_page=100', { next: { revalidate: fiveDays } })


    if (!res.ok) throw new Error('getAllRepos: failed to fetch data')
    return res.json()
};