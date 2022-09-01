const button = document.querySelector('.collapsible__button');
const hideButton = document.querySelector('.collapsible__action--visible');
const showButton = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

hideButton.style.display = 'none';
content.style.display = 'none';

button.addEventListener("click", function (e) {
    if (content.style.display === 'none') {
        content.animate([
            { transform: 'translateY(-15px)', opacity: 0, offset: 0 },
            { transform: 'translateY(-10px)', opacity: .5, offset: .5 },
            { transform: 'translateY(0px)', opacity: 1, offset: 1 }
        ], {
            duration: 500,
        });
        hideButton.style.display = 'block';
        showButton.style.display = 'none';
        content.style.display = 'initial';
    }
    else {
        content.style.display = 'none';
        hideButton.style.display = 'none';
        showButton.style.display = 'block';
    }
});

button.style.cursor = 'pointer';