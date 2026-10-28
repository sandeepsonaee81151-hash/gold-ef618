// ============================================
// Sanjay Jewellery — Live Preview Server
// Auto-reloads the browser when files change.
// Run: node server.js   ->   http://localhost:8080
// ============================================
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT = __dirname;

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm'
};

// Clients connected for live reload (Server-Sent Events)
const clients = new Set();

// Small live-reload client script injected into HTML pages
const LIVE_RELOAD_SNIPPET = `
<script>
(function () {
    var es = new EventSource('/__livereload');
    es.onmessage = function (e) {
        if (e.data === 'reload') { location.reload(); }
    };
    es.onerror = function () { /* server restarted, will reconnect */ };
})();
</script>
`;

function send(res, status, body, type) {
    res.writeHead(status, { 'Content-Type': type || 'text/plain; charset=utf-8' });
    res.end(body);
}

function watchFiles() {
    fs.watch(ROOT, { recursive: true }, function (eventType, filename) {
        if (!filename) return;
        if (filename.startsWith('.')) return;
        // Ignore the server's own noise
        if (filename === 'server.js') return;
        console.log('[livereload] change detected:', filename);
        clients.forEach(function (res) {
            try {
                res.write('data: reload\n\n');
            } catch (e) { /* client gone */ }
        });
    });
}

const server = http.createServer(function (req, res) {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);

    // Live reload endpoint
    if (urlPath === '/__livereload') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
        res.write('data: connected\n\n');
        clients.add(res);
        req.on('close', function () { clients.delete(res); });
        return;
    }

    let filePath = path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath);

    // Prevent path traversal
    if (!filePath.startsWith(ROOT)) {
        return send(res, 403, 'Forbidden');
    }

    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Fallback to index.html for unknown routes
            fs.readFile(path.join(ROOT, 'index.html'), function (err2, html) {
                if (err2) return send(res, 404, '404 Not Found');
                const injected = html.toString('utf8').replace('</body>', LIVE_RELOAD_SNIPPET + '</body>');
                send(res, 200, injected, MIME['.html']);
            });
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        let body = data;

        if (ext === '.html') {
            body = data.toString('utf8').replace('</body>', LIVE_RELOAD_SNIPPET + '</body>');
        }

        send(res, 200, body, MIME[ext] || 'application/octet-stream');
    });
});

server.listen(PORT, function () {
    console.log('Sanjay Jewellery live server chal raha hai:');
    console.log('  -> http://localhost:' + PORT);
    watchFiles();
});
