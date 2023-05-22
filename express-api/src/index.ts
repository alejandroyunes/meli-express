import express from 'express'
// const cors = require('cors')

const app = express()
app.use(express.json())
// app.use(cors())
const port = 3001

app.get('/', (req, res) => {
  res.send('helll its working fsdfs sfasdfdfs')
})

app.listen(port, () => {
  console.log(`Server Running`)
})
