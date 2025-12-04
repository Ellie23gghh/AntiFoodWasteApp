// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Definim o rută de bază (test)
app.get('/', (req, res) => {
    // Schimbăm mesajul pentru a indica rularea cu succes a serverului intern
    res.send('Backend Server is running successfully!');
});

// Pornim serverul
app.listen(PORT, () => {
    console.log(`Serverul Express ascultă pe http://localhost:${PORT}`);
});