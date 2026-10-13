const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

const root = path.join(__dirname, 'dist');
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
};

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT must be an integer between 1 and 65535.');
  process.exit(1);
}

const server = http.createServer(async (req, res) => {
  const reply = (status, message) => {
    res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : message);
  };
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return reply(405, 'Method Not Allowed');
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    return reply(400, 'Bad Request');
  }
  if (pathname.includes('\\') || pathname.includes('\0') || pathname.includes(':') ||
      pathname.split('/').some(part => part.startsWith('.'))) {
    return reply(403, 'Forbidden');
  }

  const file = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
  const insideRoot = candidate => {
    const relative = path.relative(root, candidate);
    return relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);
  };
  if (!insideRoot(file)) return reply(403, 'Forbidden');

  try {
    const realFile = await fs.realpath(file);
    if (!insideRoot(realFile)) return reply(403, 'Forbidden');
    if (!(await fs.stat(realFile)).isFile()) return reply(404, 'Not Found');
    const content = await fs.readFile(realFile);
    res.writeHead(200, {
      'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': content.length,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return reply(404, 'Not Found');
    console.error(error);
    reply(500, 'Internal Server Error');
  }
});

server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `Port ${port} is already in use. Set PORT to a different number.`
    : error.message);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Local: http://localhost:${port}`);
  console.log('Press Ctrl+C to stop.');
});
