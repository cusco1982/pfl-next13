export default async function getUser() {

    const fiveDays = (5 * 24 * 60 * 60 * 1000)

    // get Github account information
    const res = await fetch('https://api.github.com/users/cusco1982', { next: { revalidate: fiveDays } })


    if (!res.ok) throw new Error('getUser: failed to fetch data')
    return res.json()
};