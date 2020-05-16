const server = require("./server");

const Port = process.env.Port || 5000;

server.listen(Port, () => {
    console.log(`\nListening on port ${Port}\n`);
})

server.get("/", (req, res) => {
    res.json({ message: "Server is up and running!" });
})