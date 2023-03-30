const play = document.querySelectorAll('.play')
const closeb = document.querySelectorAll('.close')


play.forEach((play) => {
    play.addEventListener('click', () => {
        const card = play.closest('.card')
        const content = card.querySelector('.content');
        content.style.display = 'block';
    
    });
});



closeb.forEach((close) => {
    close.addEventListener('click', () => {
        const card = close.closest('.card');
        const content = card.querySelector('.content');
        content.style.display = 'none';


    });
});