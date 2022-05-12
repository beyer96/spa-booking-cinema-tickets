import View from "./View.js";
import movies from "../../../data/data.js";
import { selectedSeats, bookedSeats } from "../index.js";

export const MILISECONDS_TO_DAY = 86400000;

export function displaySeats(movieID, day, session) {
    let seatNumber = 0;
    let selectedSeatsForCurrentSession = [];
    let bookedSeatsForCurrentSession = [];
    if(selectedSeats.length > 0) {
        selectedSeatsForCurrentSession = selectedSeats.filter(seat => (seat.databaseMovieIndex === movieID && seat.databaseDayIndex === day && seat.databaseSessionIndex === session));
    }
    if(bookedSeats.length > 0) {
        bookedSeatsForCurrentSession = bookedSeats.filter(seat => (seat.databaseMovieIndex === movieID && seat.databaseDayIndex === day && seat.databaseSessionIndex === session));
    }
    return movies[movieID].dates[day][session].seats.map((row, i) => {
        return `
            <div class="seats__row">
                ${row.map((seat, x) => {
                    seatNumber++;
                    if((selectedSeatsForCurrentSession.findIndex(seat => Number(seat.seat) === seatNumber)) > -1) {
                        return `
                        <div class="seats__seat" data-seat="${seatNumber}" data-reserved="selected">
                            <span class="seats__seat-number">${seatNumber}</span>
                        </div>
                    `
                    }
                    if((bookedSeatsForCurrentSession.findIndex(seat => Number(seat.seat) === seatNumber)) > -1) {
                        return `
                        <div class="seats__seat" data-seat="${seatNumber}" data-reserved="booked">
                            <span class="seats__seat-number">${seatNumber}</span>
                        </div>
                    `
                    }
                    return `
                        <div class="seats__seat" data-seat="${seatNumber}" data-reserved="${seat}">
                            <span class="seats__seat-number">${seatNumber}</span>
                        </div>
                    `
                }).join('')}
            </div>`
    }).join('');
}

export function displayDates(movieID) {
    let dates = [];
    // filtering each session time into 'dates' array
    movies[movieID].dates.forEach((day, i) => {
        let date = new Date(Date.now() + MILISECONDS_TO_DAY * i);
        day.map((session, x) => dates.push([i.toString(), x.toString(), `${date.getDate()}. ${date.getMonth()+1}. -- ${session.time}:00`]))
    });
    return dates.map(date => {
        return `<option day=${date[0]} session=${date[1]}>${date[2]}</option>`
    }).join('');
}

export function displayMovies(movieID = 0) {
    return movies.map((movie, i) => {
        if(movieID === i) {
            return `
                <option key=${i} selected>${movie.name}</option>
            `
        }
        return `
            <option key=${i}>${movie.name}</option>
        `
    })
}

export function selectSeat(seatNumber) {
    let movie = document.getElementById('movie').selectedOptions[0];
    let selectedTime = document.getElementById('date').selectedOptions[0];
    // create object to store all needed info about seat selected to book
    let selectedSeat = {
        movie: movie.innerText,
        selectedTime: selectedTime.innerText,
        seat: seatNumber,
        databaseMovieIndex: Number(movie.attributes.key.value),
        databaseDayIndex: Number(selectedTime.attributes.day.value),
        databaseSessionIndex: Number(selectedTime.attributes.session.value)
    }
    let seatsToReturn = selectedSeats;
    seatsToReturn.push(selectedSeat);
    console.log(seatsToReturn);
    return seatsToReturn;
}

export function unselectSeat(seatNumber) {
    let movieIndex = document.getElementById('movie').selectedIndex;
    let selectedSessionIndex = Number(document.getElementById('date').selectedOptions[0].attributes.session.value);
    let selectedDayIndex = Number(document.getElementById('date').selectedOptions[0].attributes.day.value);
    let filterSeats = seat => {
        if(seat.databaseDayIndex === selectedDayIndex && 
            seat.databaseMovieIndex === movieIndex && 
            seat.databaseSessionIndex === selectedSessionIndex && 
            seat.seat === seatNumber) {
                return false;
            }
        return true;
    }
    let seatsToReturn = selectedSeats.filter(filterSeats)
    console.log(seatsToReturn)
    return seatsToReturn;
}

export function displaySelectedSeats(movieID) {
    if(selectedSeats.length <= 0) return '<p>No seats selected for this movie on selected date. Please select seats below.</p>'

    let movieIndex = document.getElementById('movie')?.selectedIndex || Number(movieID) || 0;
    let selectedSessionIndex = Number(document.getElementById('date')?.selectedOptions[0].attributes.session.value) || 0;
    let selectedDayIndex = Number(document.getElementById('date')?.selectedOptions[0].attributes.day.value) || movies[movieIndex].dates.findIndex(date => date.length > 0);
    let filterSeats = seat => {
        if(seat.databaseDayIndex === selectedDayIndex && 
            seat.databaseMovieIndex === movieIndex && 
            seat.databaseSessionIndex === selectedSessionIndex) {
                return true;
            }
        return false;
    }
    
    let selectedSeatsForSelectedSession = selectedSeats.filter(filterSeats)
    if(selectedSeatsForSelectedSession.length <= 0) return '<p>No seats selected for this movie on selected date. Please select seats below.</p>'
    let seatDivs = selectedSeatsForSelectedSession.map(seat => {
        return `
            <div class="selected-seats__seat">
                <span id="movie-name">${seat.movie}</span>
                <span id="selected-time">${seat.selectedTime}</span>
                <span id="selected-seat">Seat n. ${seat.seat}</span>
                <button id="unselect-seat" seat=${seat.seat}>Remove</button>
            </div>`
    }).join('');
    return `
        ${seatDivs}
        <a href="/cart" data-link>Book seats</a>
    `
}



export default class extends View {
    constructor(params) {
        super(params);
        this.setTitle("Schedule");
    }

    async getHtml() {
        // variables to display correct data when page renders
        let movieID = Number(this.params.movieID) || 0;
        let day = movies[movieID].dates.findIndex(day => day.length > 0);
        let session = 0;
        let date = new Date(Date.now() + MILISECONDS_TO_DAY * day);
        let nextSession = `${date.getDate()}. ${date.getMonth()+1}. -- ${movies[movieID].dates[day][0].time}:00`;

        return `
            <link rel="stylesheet" href="../static/styles/schedule.css">
            <header>
                <ul>
                    <a href="/" data-link><li>Back home</li></a>
                    <a href="/movies" data-link><li>Movies</li></a>
                    <a href="/cart" data-link><li>Cart</li></a>
                </ul>
            </header>
            <main>
                <h1>Schedule</h1>
                <div class="selectors">
                    <div class="selectors__movie-select">
                        <label for="movie">Select a movie: </label>
                        <select id="movie">
                            ${displayMovies(movieID)}
                        </select>
                    </div>
                    
                    <div class="selectors__date-select">
                        <label for="date">Select date & time: </label>
                        <select id="date">
                            ${displayDates(movieID)}
                        </select>
                    </div>
                </div>

                <h2>Seats: <span id="movie-name">${movies[movieID].name}</span> --- <span id="selected-time">${nextSession}</span></h2>
                
                <div class="seats" id="seats">
                    ${displaySeats(movieID, day, session)}
                </div>
                <div class="explanatory">
                    <span class="explanatory__free">Free seats</span>
                    <span class="explanatory__occupied">Occupied seats</span>
                    <span class="explanatory__selected">Selected seats</span>
                    <span class="explanatory__booked">Booked seats</span>
                </div>
                <div class="selected-seats" id="selected-seats">
                    <h2>Selected seats:</h2>
                    ${displaySelectedSeats(this.params.movieID)}
                </div>
                
            </main>
        `;
    }
}