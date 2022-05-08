import Home from './views/Home.js';
import Movies from './views/Movies.js';
import Schedule from './views/Schedule.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/', view: Home },
        { path: '/movies', view: Movies },
        { path: '/schedule', view: Schedule }
    ];

    const errorRoute = { view: () => console.error('Error 404') };

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    if(!match) {
        errorRoute.view();
    }

    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getHtml();
}

window.addEventListener('popstate', router);

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('click', e => {
        if(e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
        if(e.target.parentElement?.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.parentNode.href);
        }
        if(e.target.matches('[data-reserved=false]') || e.target.parentElement?.matches('[data-reserved=false]')) {
            console.log('reserve!');
        }
    })
    router();
})