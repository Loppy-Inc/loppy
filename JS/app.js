$(document).ready(main);

function main() {
    let _header = document.getElementById('_header');

    let responsiveCont = document.createElement('div');
    responsiveCont.className = 'responsive-cont';

    let login = document.createElement('a');
    login.className = 'r-login';
    
    let menu = document.createElement('a');
    menu.className = 'menu';
        
    let userIcon = document.createElement('i');
    userIcon.className = 'r-user-icon fas fa-user-circle'

    let menuIcon = document.createElement('i');
    menuIcon.className = 'menuButton fas fa-bars';

    login.appendChild(userIcon);
    menu.appendChild(menuIcon);
    responsiveCont.appendChild(login);
    responsiveCont.appendChild(menu);
    _header.appendChild(responsiveCont);

    $('.menu').click(function() {
        $('nav').toggle();
    });
};
