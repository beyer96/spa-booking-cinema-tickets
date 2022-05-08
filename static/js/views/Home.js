import View from "./View.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle('Book-buster');
    }

    async getHtml() {
        return `
        <link rel="stylesheet" href="./static/styles/home.css">
        <header>
            <h1>Book-buster</h1>
            <h2>Pick a movie & book your ticket. Online.</h2>
            <p>Book-buster is SPA for booking movie tickets online. Choose a blockbuster, date and book your ticket! It's that easy.</p>
            <div class="cta-buttons">
                <a href='/movies' id="pick-movie" class="cta-buttons__button" data-link>Pick a movie</a>
                <span>or</span>
                <a href='/schedule' id="pick-date" class="cta-buttons__button" data-link>Select date</a>
            </div>
        </header>
        <main>
            <div class="top-picks">
                <h2>Top picks</h2>
                <div class="top-picks__movie">
                    <h3>Movie</h3>
                    <img src="https://unsplash.it/165/162/" alt="Movie" />
                    <button class="top-picks__book-button">Book</button>
                </div>
                <div class="top-picks__movie">
                    <h3>Movie</h3>
                    <img src="https://unsplash.it/163/163/" alt="Movie" />
                    <button class="top-picks__book-button">Book</button>
                </div>
                <div class="top-picks__movie">
                    <h3>Movie</h3>
                    <img src="https://unsplash.it/165/164/" alt="Movie" />
                    <button class="top-picks__book-button">Book</button>
                </div>
                <div class="top-picks__movie">
                    <h3>Movie</h3>
                    <img src="https://unsplash.it/159/165/" alt="Movie" />
                    <button class="top-picks__book-button">Book</button>
                </div>
                <div class="top-picks__movie">
                    <h3>Movie</h3>
                    <img src="https://unsplash.it/165/161/" alt="Movie" />
                    <button class="top-picks__book-button">Book</button>
                </div>
            </div>
        </main>
        `;
    }
}