
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

const image = document.querySelector('img');

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        image.setAttribute('src', 'byui-logo-white.png');
        document.querySelector('body').style.color = 'white';
        document.querySelector('body').style.backgroundColor = 'black';
    } else {
        // code for changes to colors and logo
        image.setAttribute('src', 'byui-logo-blue.webp');
        document.querySelector('body').style.color = 'black';
        document.querySelector('body').style.backgroundColor = 'white';
    }
}           
                    