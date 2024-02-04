const express = require('express');
const app = express();
const { getPokemon } = require('./getPokemon.js')
const port = process.env.PORT || 8080;

// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

app.get('/pokemonSearch', async (req, res, next) => {
  try {
    const pokemon = await getPokemon();
    res.json(pokemon);
  } catch (error) {
    // Passes errors into the error handler
    return next(error)
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
