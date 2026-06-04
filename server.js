const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the content type
    res.setHeader('Content-Type', 'text/html');

    // Read the HTML file
    fs.readFile(path.join('C:\\Users\\MOUSE7\\Desktop\\Hawash\\My projects\\Mr Mohamed project', 'index.html'), (err, data) => {
        if (err) {
            // If there's an error reading the file, respond with an error
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        // Otherwise, respond with the content of the HTML file
        res.writeHead(200);
        res.end(data);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
