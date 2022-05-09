import View from "./View.js";
import movies from '../../../data/data.js';

export default class extends View {
    constructor(params) {
        super(params);
        this.setTitle("Movies");
    }

    populateMovies() {
        return movies.map((movie, i) => {
                return `<div class="movies__movie">
                    <a href="/schedule/${i}" data-link>
                        <h2>${movie.name}</h2>
                        <img src="${movie.image}" alt="" />
                        <p>${movie.description}</p>
                    </a>
                </div>`
        }).join('');
    }

    async getHtml() {
        return `
            <link rel="stylesheet" href="../static/styles/movies.css">
            <header>
                <ul>
                    <a href="/" data-link><li>Back home</li></a>
                    <a href="/schedule" data-link><li>Schedule</li></a>
                    <a href="/cart" id="cart" data-link><li>Cart</li></a>
                </ul>
            </header>
            <main>
                <h1>Movies</h1>
                <p>List of currently available movies in our cinema. Click movie, which you want to see, to see available term.</p>
                <div class="movies">
                    ${this.populateMovies()}
                </div>
            </main>`
    }
}