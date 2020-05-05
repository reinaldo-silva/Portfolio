const navSlide = () => {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');
    const projectIcon = document.querySelector('#projectIcon');
    const welcome = document.querySelector('.logo a');


    icon.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-ativa');

        //Animação dos links
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        //animação do icon
        icon.classList.toggle('toggle');
    });

    projectIcon.addEventListener('click', () => {

        nav.classList.toggle('nav-ativa');

        //Animação dos links
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        //animação do icon
        icon.classList.toggle('toggle');
    });

    welcome.addEventListener('click', () => {

        if (nav.classList.contains('nav-ativa')) {
            nav.classList.toggle('nav-ativa');
            navLink.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
                }
            });
            //animação do icon
            icon.classList.toggle('toggle');
        };
    });

}

navSlide();