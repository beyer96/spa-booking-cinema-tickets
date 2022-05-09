import View from "./View.js";
import movies from "../../../data/data.js";

const MILISECONDS_TO_DAY = 86400000;

export function displaySeats(movieID, day, session) {
    let seatNumber = 0;
    return movies[movieID].dates[day][session].seats.map((row, i) => {
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

export function displayDates(movieID) {
    let dates = [];
    // filtering each session time into 'dates' array
    movies[movieID].dates.forEach((day, i) => {
        if(i == 0) {
            day.map((session, x) => dates.push([i.toString(), x.toString(), 'Today -- ' + session.time]));
        }
        else if(i == 1) {
            day.map((session, x) => dates.push([i.toString(), x.toString(), 'Tommorow -- ' + session.time]));
        }
        else {
            let date = new Date(Date.now() + MILISECONDS_TO_DAY * i);
            day.map((session, x) => dates.push([i.toString(), x.toString(), `${date.getDate()}. ${date.getMonth()+1}. -- ${session.time}`]))
        }
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
        let nextSession;
        if(day == 0) {
            nextSession = 'Today -- ' + movies[movieID].dates[day][0].time;
        }
        else if (day == 1) {
            nextSession = 'Tomorrow -- ' + movies[movieID].dates[day][0].time;
        }
        else {
            let date = new Date(Date.now() + MILISECONDS_TO_DAY * day);
            nextSession = `${date.getDate()}. ${date.getMonth()+1}. -- ${movies[movieID].dates[day][0].time}`
        }
        
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
            </main>
        `;
    }
}