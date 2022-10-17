const {
    BE_HOST,
    BE_PORT,
} = process.env;

export default async (req, res) => {
    if(!req.query.todo) {
        return res.status(400).send("todo parameter required.")
    }
    let todo = encodeURI(req.query.todo)

    const url = `http://${BE_HOST}:${BE_PORT}/${todo}`;

    return fetch(url, { method: 'DELETE' })
        .then(r => r.json())
        .then(data => {
            return res.status(200).json(data)
        })
}
