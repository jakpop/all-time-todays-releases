"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const spotify_api_1 = require("spotify-api");
class Movie {
}
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('pondro dla was');
});
app.get('/movies', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const album = new spotify_api_1.AlbumObjectSimplified();
    const movie = new Movie();
    movie.title = "Baby Driver";
    movie.plot_summary = "bla bla";
    movie.duration = 120;
    res.send(movie);
}));
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map