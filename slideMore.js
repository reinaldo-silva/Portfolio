const slideMore = () => {
    const more = document.querySelector('#morePortfolio');
    const telaSlide = document.querySelector('.more');
    const project = document.querySelector('.projects');
    const span = document.querySelector('.more span');
    const back = document.querySelector('#flecha');

    more.addEventListener('click', () => {

        telaSlide.classList.toggle('more-ativa');
        span.classList.toggle('textoMore');
        project.classList.toggle('project-none');
        back.classList.toggle('back');
    });

    back.addEventListener('click', () => {
        telaSlide.classList.toggle('more-ativa');
        span.classList.toggle('textoMore');
        project.classList.toggle('project-none');
        back.classList.toggle('back');
    });


}

slideMore();