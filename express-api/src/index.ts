import express from 'express'
// const cors = require('cors')

const app = express()
app.use(express.json())
// app.use(cors())
const port = 3001

app.get('/', (_req, res) => {
  res.send('Página de inicio - Caja de Búsqueda');
});

app.listen(port, () => {
  console.log(`Server Running`)
})

