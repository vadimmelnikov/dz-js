
var selected = document.getElementById('list');

selected.addEventListener('click', function(event) {
    event.preventDefault();
    var target = event.target;
    if (target.classList.contains('accordion__title')) {
        var active = document.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        target.classList.add('active');
    }
})

