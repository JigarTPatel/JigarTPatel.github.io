function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.style.display = (menuItems.style.display === 'none' || menuItems.style.display === '') ? 'flex' : 'none';
}

function showYogaSlider() {
    document.querySelector('.yoga-slider').style.display = 'block';
    document.querySelector('.enter-command').style.display = 'none';
    document.getElementById('optionsExplanation').innerText = 'Yoga Slider: Slide through different yoga images.';
}

function showEnterCommand() {
    document.querySelector('.enter-command').style.display = 'block';
    document.querySelector('.yoga-slider').style.display = 'none';
    document.getElementById('optionsExplanation').innerText = 'Enter Command: Type "a" to play basketball, "b" to read a book, or "c" to shovel up some dirt.';
}

function changeImage(value) {
    var imageSrc = "images/yoga" + value + ".jpg";
    document.getElementById('yogaImage').src = imageSrc;
}


function checkCommand() {
    var commandInput = document.getElementById('commandInput').value.toLowerCase();
    var commandResult = document.getElementById('commandResult');

    switch (commandInput) {
        case 'a':
            commandResult.innerHTML = "Work image: <img src='images/work.jpg' alt='Work'>";
            break;
        case 'b':
            commandResult.innerHTML = "Shovel image: <img src='images/shovel.jpg' alt='Shovel'>";
            break;
        case 'c':
            commandResult.innerHTML = "Read image: <img src='images/read.jpg' alt='Read'>";
            break;
        case 'd':
            commandResult.innerHTML = "Rain image: <img src='images/rain.jpg' alt='Rain'>";
            break;
        case 'e':
            commandResult.innerHTML = "Original image: <img src='images/original.jpg' alt='Original'>";
            break;
        case 'f':
            commandResult.innerHTML = "Clown image: <img src='images/clown.jpg' alt='Clown'>";
            break;
        case 'g':
            commandResult.innerHTML = "Birthday image: <img src='images/birthday.jpg' alt='Birthday'>";
            break;
        default:
            commandResult.innerHTML = "Invalid command. Image by <a href='https://www.freepik.com/free-vector/hand-drawn-stickman-collection_20856908.htm#query=stick%20figure&position=1&from_view=keyword&track=ais&uuid=12d17ea3-cffc-4386-9be4-ff9dc4b5edc2'>Freepik</a>";
            break;
    }
}
