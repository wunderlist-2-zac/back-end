require("dotenv").config();

const server = require("./api/server"); //  Where the magic happens

const PORT = process.env.PORT || 5858;
server.listen(PORT, console.log(`\n** Server listening on ${PORT} **\n`));
