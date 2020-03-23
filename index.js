const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    "evento": "ablaso",
    "aluno": "fulano"
  });
})

app.listen(3333);
