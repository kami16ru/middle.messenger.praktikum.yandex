const express = require('express')
// const helmet = require('helmet')
const path = require('path')

const app = express()
const PORT = 3000
const clientPath = path.join(__dirname, './dist')
// const staticPath = path.join(__dirname, './static')

app.use(express.static(clientPath))
// app.use(express.static(staticPath))
// app.use(helmet())

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, '/index.html'))
})

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`prodev-chat app listening on port ${PORT}!`)
  })
}
