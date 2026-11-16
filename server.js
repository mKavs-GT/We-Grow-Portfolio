const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5500;
const ROOT = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
    
    // Safety check against directory traversal
    const safePath = path.normalize(path.join(ROOT, reqPath));
    if (!safePath.startsWith(ROOT)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    fs.stat(safePath, (err, stats) => {
        let target = safePath;
        if (!err && stats.isDirectory()) {
            target = path.join(safePath, 'index.html');
        }

        fs.readFile(target, (readErr, data) => {
            if (readErr) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found: ' + reqPath);
                return;
            }

            const ext = path.extname(target).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';
            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate'
            });
            res.end(data);
        });
    });
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        const altPort = 5501;
        console.log(`Port ${PORT} in use, trying ${altPort}...`);
        server.listen(altPort, '0.0.0.0', () => {
            console.log(`Live Server running at http://localhost:${altPort}/`);
        });
    } else {
        console.error('Server error:', err);
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Live Server running at http://localhost:${PORT}/`);
});

