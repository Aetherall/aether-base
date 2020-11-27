import express from 'express';

const app = express();

app.use(express.json())

app.use((req, res, next) => {
  console.log(`Received request ${req.method} on ${req.url}`)
  next()
})

app.get('/healthcheck', (req, res) => {
  res.send('ok')
})

app.get('/', (req, res) => {
  res.send('hello world !')  
})

console.log('<= Starting server...')
app.listen(6001, () => {
  console.log('=> Server started, listening at port 6001')
})