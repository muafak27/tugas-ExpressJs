const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })
})
app.get('/contact', (req, res) => {
  res.json({
    nama: 'mohamad andi muafak',
    umur: "19 tahun",
    askot: "banyuwangi"
  })
})
app.use('/', (req, res) => {
    res.send('Halaman Error')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})