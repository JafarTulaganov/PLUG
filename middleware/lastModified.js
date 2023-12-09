// middleware/lastModified.js
export default function ({ isServer, req, res }) {
  if (!isServer) return

  const lastModified = new Date().toUTCString()

  res.setHeader('Last-Modified', lastModified)

  const ifModifiedSince = req.headers['if-modified-since']

  if (
    ifModifiedSince &&
    new Date(ifModifiedSince).getTime() >= new Date(lastModified).getTime()
  ) {
    res.writeHead(304, 'Not Modified')
    res.end()
  }
}
