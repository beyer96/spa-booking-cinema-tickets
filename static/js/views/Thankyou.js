import { navigateTo, bookSeats } from "../index.js";
import View from "./View.js";



export default class extends View {
    constructor(params) {
        super(params);
        this.setTitle('Thank you for booking!');
    }

    async getHtml() {
        let redirect = setTimeout(() => {
            navigateTo('/');
        }, 10000);
        document.addEventListener('click', () => {
            clearTimeout(redirect);
        })
        bookSeats();
        return `
            <link rel="stylesheet" href="./static/styles/thankyou.css">
            <header>
                <ul>
                    <a href="/" data-link><li>Back home</li></a>
                    <a href="/movies" data-link><li>Movies</li></a>
                    <a href="/cart" data-link><li>Cart</li></a>
                </ul>
            </header>
            <main>
                <h1>Thank you for booking!</h1>
                <p>Your selected seats have been booked. 
                This page will automatically redirect to home page in 10 seconds.
                If not, please use <a href='/' data-link>this link</a>
                </p>
            </main>`
    }
}