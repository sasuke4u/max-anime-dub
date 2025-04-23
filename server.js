const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes for managing anime content
let animeList = [
    { id: 1, title: 'Naruto Dub', language: 'English' },
    { id: 2, title: 'One Piece Dub', language: 'English' },
];

// Endpoint to get all anime
app.get('/anime', (req, res) => {
    res.json(animeList);
});

// Endpoint to add new anime
app.post('/anime', (req, res) => {
    const newAnime = req.body;
    newAnime.id = animeList.length + 1;  // Assign a unique id
    animeList.push(newAnime);
    res.status(201).json(newAnime);
});

// Endpoint to delete anime
app.delete('/anime/:id', (req, res) => {
    const id = parseInt(req.params.id);
    animeList = animeList.filter(anime => anime.id !== id);
    res.status(200).send(`Anime with ID ${id} deleted`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
