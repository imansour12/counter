var x = document.getElementById('clickB');
var counter = 1;

x.addEventListener('click', function () {
    if (counter == 1) {
        alert('You clicked me');
    }
    else if (counter == 2) {
        alert('You clicked me again');
    }
    else {
        alert('You clicked me ' + counter + 'times');
    }
    counter++;
}, false)