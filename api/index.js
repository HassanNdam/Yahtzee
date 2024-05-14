const express = require('express');

const app = express();
const port = 3001; // Port sur lequel l'application va s'exécuter

// Routes et middleware de votre application Express

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Autres routes et middleware...

// Démarrage du serveur
app.listen(port, () => {
  console.log(`L'application est en cours d'exécution sur le port ${port}`);
});