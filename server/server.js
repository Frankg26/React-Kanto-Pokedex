const express = require('express');
const app = express();
const { getPokemon } = require('./getPokemon.js')
const port = process.env.PORT || 8080;

app.use(express.static('../client/build'));

app.get('/pokemonSearch', async (req, res, next) => {
  try {
    const pokemon = await getPokemon();
    res.json(pokemon);
  } catch (error) {
    return next(error)
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
