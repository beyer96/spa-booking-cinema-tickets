import View from "./View.js";
import movies from "../../../data/data.js";

export default class extends View {
    constructor(params) {
        super(params);
        this.setTitle('Book-buster');
    }
    topPicksIndexes = [0, 2, 3, 4, 5];
    getTopPicks() {
        return this.topPicksIndexes.map(index => {
            return `
            <div class="top-picks__movie">
                <h3>${movies[index].name}</h3>
                <img src="${movies[index].image}" alt="Movie" />
                <a href='/schedule/${index}' class="top-picks__book-button" data-link>Book</a>
            </div>
            `
        }).join('');    
    }

    async getHtml() {
        return `
        <link rel="stylesheet" href="./static/styles/home.css">
        <header>
            <ul>
                <a href="/movies" data-link><li>Movies</li></a>
                <a href="/schedule" data-link><li>Schedule</li></a>
                <a href="/cart" data-link><li>Cart</li></a>
            </ul>
        </header>
        <main>
            <div class="intro">
                <h1>Book-buster</h1>
                <h2>Pick a movie & book your ticket. Online.</h2>
                <p>Book-buster is SPA for booking movie tickets online. Choose a blockbuster, date and book your ticket! It's that easy.</p>
                <div class="cta-buttons">
                    <a href='/movies' id="pick-movie" class="cta-buttons__button" data-link>Pick a movie</a>
                    <span>or</span>
                    <a href='/schedule' id="pick-date" class="cta-buttons__button" data-link>Select date</a>
                </div>
            </div>
            <div class="top-picks">
                <h2>Top picks</h2>
                ${this.getTopPicks()}
            </div>
        </main>
        `;
    }
}