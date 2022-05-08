import View from "./View.js";
import movies from "../../../data/data.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Schedule");
    }

    displaySeats(movieID, day) {
        let seatNumber = 0;
        return movies[movieID].dates[day][0].seats.map((row, i) => {
            return `
                <div class="seats__row">
                    ${row.map((seat, x) => {
                        seatNumber++;
                        return `
                            <div class="seats__seat" data-reserved="${seat}">
                                <span class="seats__seat-number">${seatNumber}</span>
                            </div>
                        `
                    }).join('')}
                </div>`
        }).join('');
    }

    async getHtml() {
        return `
            <link rel="stylesheet" href="../static/styles/schedule.css">
            <header>
                <ul>
                    <a href="/" data-link><li>Back home</li></a>
                    <a href="/movies" data-link><li>Movies</li></a>
                    <a href="/cart" id="cart" data-link><li>Cart</li></a>
                </ul>
            </header>
            <main>
                <h1>Schedule</h1>
                <div class="seats">
                    ${this.displaySeats(0, 1)}
                </div>
            </main>
        `;
    }
}