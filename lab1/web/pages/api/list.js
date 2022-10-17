const {
    BE_HOST,
    BE_PORT,
} = process.env;

export default async (req, res) => {
    const url = `http://${BE_HOST}:${BE_PORT}`

    return fetch(url)
        .then(r => r.json())
        .then(data => {
            return res.status(200).json(data)
        })
}
