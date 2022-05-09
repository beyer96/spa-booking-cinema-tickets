import movies from '../../data/data.js';
import Home from './views/Home.js';
import Movies from './views/Movies.js';
import Schedule, { displaySeats, selectSeat } from './views/Schedule.js';

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }))
}

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/', view: Home },
        { path: '/movies', view: Movies },
        { path: '/schedule', view: Schedule },
        { path: '/schedule/:movieID', view: Schedule }
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
        if(e.target.matches('[data-reserved=booked]')) {
            // unselectSeat()
            e.target.dataset.reserved = "false";
        }
        // click event for unselecting reserved seats (if text span inside div was clicked)
        else if(e.target.parentElement?.matches('[data-reserved=booked]')) {
            // unselectSeat()
            e.target.parentElement.dataset.reserved = "false";
        }
        // click event for reserving seats
        else if(e.target.matches('[data-reserved=false]')) {
            selectSeat(e.target.textContent.trim());
            e.target.dataset.reserved = "booked";
        }
        // click event for reserving seats (if text span inside div was clicked)
        else if(e.target.parentElement?.matches('[data-reserved=false]')) {
            selectSeat(e.target.textContent.trim());
            e.target.parentElement.dataset.reserved = "booked";
        }
    })
    
    document.addEventListener('change', (e) => {
        // onchange event for Schedule.js file
        if(e.target.id === 'movie') {
            const MILISECONDS_TO_DAY = 86400000;
            let movie = document.getElementById('movie').value;
            // change h2 header to current movie
            document.getElementById('movie-name').innerText = movie;
            let dates = [];
            // filtering each session time into 'dates' array
            movies.find(m => m.name === movie).dates.forEach((day, i) => {
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
            let seats = displaySeats(movieID, dates[0][0], dates[0][1]);
            document.getElementById('seats').innerHTML = seats;
        }
        // refresh map of seats for current session
        if(e.target.id === 'date') {
            let movieID = document.getElementById('movie').selectedIndex;
            let day = Number(e.target.selectedOptions[0].attributes.day.value);
            let session = Number(e.target.selectedOptions[0].attributes.session.value);
            let seats = displaySeats(movieID, day, session);
            document.getElementById('seats').innerHTML = seats;
            document.getElementById('selected-time').innerText = e.target.value;
        }
        
    })

    router();
})