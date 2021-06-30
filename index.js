const http = require('http')
require('dotenv').config()

const { PORT } = process.env

// this is the starting point of our method-checker
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write(`Welcome to the Method-Checker API`)
    res.write(`\nYou used ${req.method} to access this route`)
    res.write('\nThank you')
    return res.end()
})

// listens for serves the application
server.listen(PORT, () =>
    console.log(`Method-Checker started successfully on ${PORT}`))