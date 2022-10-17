const {
    BE_HOST,
    BE_PORT,
} = process.env;

export default async (req, res) => {
    const { todo } = req.query;
    if(!todo) {
        return res.status(400).send("todo parameter required.")
    }

    const url = `http://${BE_HOST}:${BE_PORT}`

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: todo })
    })
        .then(r => r.json())
        .then(data => {
            return res.status(200).json(data)
        })
}
