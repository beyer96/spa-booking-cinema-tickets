import View from "./View.js";
import { selectedSeats } from "../index.js";

export function displayCart() {
    if(selectedSeats.length <= 0) return `
        <p>Cart is empty. <a href="/schedule" data-link>Click here</a> to book a movie ticket.</p>
    `
    let seats = selectedSeats.map((seat, i) => {
        return `
            <div class="cart__seat">
                <span>${seat.movie}</span>
                <span>${seat.selectedTime}</span>
                <span>Seat n. ${seat.seat}</span>
                <button id="remove-button" seat=${seat.seat} key=${i}>X</button>
            </div>
        `
    }).join('');
    return `
        ${seats}
        <a href="/thankyou" data-link>Book seats</a>
    `
}

export default class extends View {
    constructor(params) {
        super(params);
        this.setTitle('Cart');
    }
    async getHtml() {
        return `
            <link rel="stylesheet" href="../static/styles/cart.css">
            <header>
                <ul>
                    <a href="/" data-link><li>Back home</li></a>
                    <a href="/movies" data-link><li>Movies</li></a>
                    <a href="/schedule" data-link><li>Schedule</li></a>
                </ul>
            </header>
            <main>
                <h1>Cart</h1>
                <div id="cart">
                    ${displayCart()}
                </div>
            </main>
        `
    }
}