const menuToOpen = document.getElementById('menu-one');
const menuToClose = document.getElementById('menu-one-visible')
const dropdownButton = document.getElementById('dropdown');
const searchButton = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar')

dropdownButton.addEventListener('click', () => {
    if (menuToOpen.id === 'menu-one') {
        menuToOpen.id = 'menu-one-visible';
        dropdownButton.replaceChild(document.createTextNode('Close'), dropdownButton.firstChild);
    }  else if (menuToOpen.id === 'menu-one-visible'){
        menuToOpen.id = 'menu-one';
        dropdownButton.replaceChild(document.createTextNode('...'), dropdownButton.firstChild);
    }
});

searchButton.addEventListener('click', () => {
    if (searchBar.id === 'search-bar') {
        searchBar.id = 'search-bar-on';
        } else if (searchBar.id === 'search-bar-on'){
        searchBar.id = 'search-bar';
    }
});