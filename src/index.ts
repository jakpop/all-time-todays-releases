import express from 'express';
import { AlbumObjectSimplified } from "@types/spotify-api"

class Movie {
    id: number;
    title: string;
    plot_summary: string;
    duration: number;
}

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('yoyo');
});

app.get('/movies', async (req, res) => {
    const album = new AlbumObjectSimplified();
    const movie = new Movie();
    movie.title = "film";
    movie.plot_summary = "bla bla";
    movie.duration = 120;
    res.send(movie);
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});