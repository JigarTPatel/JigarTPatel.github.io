function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.style.display = (menuItems.style.display === 'none' || menuItems.style.display === '') ? 'flex' : 'none';
}

function showYogaSlider() {
    document.querySelector('.yoga-slider').style.display = 'block';
    document.querySelector('.enter-command').style.display = 'none';
}

function showEnterCommand() {
    document.querySelector('.enter-command').style.display = 'block';
    document.querySelector('.yoga-slider').style.display = 'none';
}

function changeImage(value) {
    var imageSrc = "images/yoga" + value + ".jpg";
    document.getElementById('yogaImage').src = imageSrc;
}

function checkCommand() {
    var commandInput = document.getElementById('commandInput').value.toLowerCase();
    var commandResult = document.getElementById('commandResult');

    if (commandInput === 'command1' || commandInput === 'command2' || commandInput === 'command3') {
        commandResult.innerHTML = "Image by <a href='https://www.freepik.com/free-vector/hand-drawn-stickman-collection_20856908.htm#query=stick%20figure&position=1&from_view=keyword&track=ais&uuid=12d17ea3-cffc-4386-9be4-ff9dc4b5edc2'>Freepik</a>";
    } else {
        commandResult.innerHTML = "Invalid command. Image by <a href='https://www.freepik.com/free-vector/hand-drawn-stickman-collection_20856908.htm#query=stick%20figure&position=1&from_view=keyword&track=ais&uuid=12d17ea3-cffc-4386-9be4-ff9dc4b5edc2'>Freepik</a>";
    }
}
