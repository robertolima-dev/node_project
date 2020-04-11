module.exports = app => {

    app.get("/", (req, res) => {

        const text = `
        API para prática:

        <br /><br />

        GET user todos

        <br />

        <a href="http://localhost:4000/user" target="_blank">http://localhost:4000/user</a>

        <br /><br />

        GET user pelo id

        <br />

        <a href="http://localhost:4000/user/1" target="_blank">http://localhost:4000/user/1</a>
        `;
        res.send(text)
    });

};