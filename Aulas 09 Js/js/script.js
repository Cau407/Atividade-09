const img = document.getElementById('img');
const card = document.getElementById('card');

function toggleText() {
    let content = document.getElementById('content');
    let card = document.getElementById('card');

    if (content.style.display === 'flex') {
        card.style.height = '260px';
        content.style.display = 'none';
    } 
    else {
        card.style.height = '500px';
    }
}

function changeButton() {
    let btn = document.getElementById('btn')
    
}

img.addEventListener('click', function() {
    toggleText();

    card.addEventListener('transitionend', function() {
        if (card.style.height == '500px') {
            content.style.display = 'flex';
        }
    }, { once: true });
});

card.style.transition = 'height 0.5s';