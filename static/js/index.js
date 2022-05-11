import movies from '../../data/data.js';
import Cart, { displayCart } from './views/Cart.js';
import Home from './views/Home.js';
import Movies from './views/Movies.js';
import Schedule, { displaySeats, displaySelectedSeats, selectSeat, unselectSeat, MILISECONDS_TO_DAY } from './views/Schedule.js';
import Thankyou from './views/Thankyou.js';

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }))
}

export const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/', view: Home },
        { path: '/movies', view: Movies },
        { path: '/schedule', view: Schedule },
        { path: '/schedule/:movieID', view: Schedule },
        { path: '/cart', view: Cart },
        { path: '/thankyou', view: Thankyou }
    ];

    const errorRoute = { view: () => console.error('Error 404') };

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    if(!match) {
        errorRoute.view();
    }

    const view = new match.route.view(getParams(match));

    document.querySelector('#app').innerHTML = await view.getHtml();
}

window.addEventListener('popstate', router);

export let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
export let bookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || [];

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('click', e => {
        // click event for rerouting app
        if(e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
        // click event for rerouting app (if child node of anchor tag was clicked)
        else if(e.target.parentElement?.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.parentNode.href);
        }

        // click event for unselecting reserved seats
        if(e.target.matches('[data-reserved=selected]')) {
            selectedSeats = unselectSeat(e.target.textContent.trim());
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
            e.target.dataset.reserved = "false";
            let displayedSelectedSeats = displaySelectedSeats();
            document.getElementById('selected-seats').innerHTML = displayedSelectedSeats;
        }
        // click event for unselecting reserved seats (if text span inside div was clicked)
        else if(e.target.parentElement?.matches('[data-reserved=selected]')) {
            selectedSeats = unselectSeat(e.target.textContent.trim());
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
            e.target.parentElement.dataset.reserved = "false";
            let displayedSelectedSeats = displaySelectedSeats();
            document.getElementById('selected-seats').innerHTML = displayedSelectedSeats;
        }
        // click event for reserving seats
        else if(e.target.matches('[data-reserved=false]')) {
            selectedSeats = selectSeat(e.target.textContent.trim());
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
            e.target.dataset.reserved = "selected";
            let displayedSelectedSeats = displaySelectedSeats();
            document.getElementById('selected-seats').innerHTML = displayedSelectedSeats;
        }
        // click event for reserving seats (if text span inside div was clicked)
        else if(e.target.parentElement?.matches('[data-reserved=false]')) {
            selectedSeats = selectSeat(e.target.textContent.trim());
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
            e.target.parentElement.dataset.reserved = "selected";
            let displayedSelectedSeats = displaySelectedSeats();
            document.getElementById('selected-seats').innerHTML = displayedSelectedSeats;
        }
        // click event for unselecting reserved seat via 'X' button in Schedule.js
        if(e.target.matches('[id=unselect-seat]')) {
            selectedSeats = unselectSeat(e.target.attributes.seat.value);
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
            document.querySelector(`[data-seat="${e.target.attributes.seat.value}"]`).dataset.reserved = "false"
            let displayedSelectedSeats = displaySelectedSeats();
            document.getElementById('selected-seats').innerHTML = displayedSelectedSeats;
        }

        // event for remove button in Cart.js
        if(e.target.matches('[id=remove-button]')) {
            let indexToRemove = Number(e.target.attributes.key.value);
            selectedSeats = selectedSeats.filter((seat, i) => i !== indexToRemove);
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
            let cart = displayCart();
            document.getElementById('cart').innerHTML = cart;
        }
    })
    
    document.addEventListener('change', (e) => {
        // onchange event for Schedule.js file - select inputs 'movie' and 'date'
        if(e.target.id === 'movie') {
            let movie = document.getElementById('movie').value;
            // change h2 header to current movie
            document.getElementById('movie-name').innerText = movie;
            let dates = [];
            // filtering each session time into 'dates' array
            movies.find(m => m.name === movie).dates.forEach((day, i) => {
                let date = new Date(Date.now() + MILISECONDS_TO_DAY * i);
                day.map((session, x) => dates.push([i.toString(), x.toString(), `${date.getDate()}. ${date.getMonth()+1}. -- ${session.time}:00`]))
            });
            document.getElementById('date').innerHTML = '';
            dates.map((date, i) => {
                const option = document.createElement('option');
                option.setAttribute('day', date[0]);
                option.setAttribute('session', date[1]);
                option.innerText = date[2];
                document.getElementById('date').append(option);
            })
            document.getElementById('selected-time').innerText = dates[0][2];
            let movieID = document.getElementById('movie').selectedIndex;
            let seats = displaySeats(movieID, Number(dates[0][0]), Number(dates[0][1]));
            document.getElementById('seats').innerHTML = seats;
            document.getElementById('selected-seats').innerHTML = displaySelectedSeats();
        }

        // refresh map of seats for current session
        if(e.target.id === 'date') {
            let movieID = document.getElementById('movie').selectedIndex;
            let day = Number(e.target.selectedOptions[0].attributes.day.value);
            let session = Number(e.target.selectedOptions[0].attributes.session.value);
            let seats = displaySeats(movieID, day, session);
            document.getElementById('seats').innerHTML = seats;
            document.getElementById('selected-time').innerText = e.target.value;
            document.getElementById('selected-seats').innerHTML = displaySelectedSeats();
        }
        
    })

    router();
})

export function bookSeats() {
    selectedSeats.forEach(seat => {
        bookedSeats.push(seat);
    })
    selectedSeats = [];
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats))
    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));
}