const photoCarousel = document.querySelector('.photo-carousel img');

const imageSources = [
    'assets/images/person1',
    'assets/images/person2',
    'assets/images/person3'
];

let currentImageIndex = 0;

function changePhoto() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    photoCarousel.src = imageSources[currentImageIndex];
}

setInterval(changePhoto, 5000);

const progressBarFirstPage = document.querySelector('.first-page .progress-bar');

function fillFirstPageProgressBar() {
    const section = document.querySelector('.satisfaction-section');
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= window.innerHeight && sectionTop >= 0) {
        progressBarFirstPage.style.width = '100%';
        window.removeEventListener('scroll', fillFirstPageProgressBar);
    }
}

window.addEventListener('scroll', fillFirstPageProgressBar);

const progressBarsSecondPage = document.querySelectorAll('.second-page .progress-bars');


function fillProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bars');
    progressBars.forEach(progressBar => {
        const percentage = parseInt(progressBar.previousElementSibling.textContent.match(/\d+/)[0]);
        const progressBarTop = progressBar.getBoundingClientRect().top;
        const progressBarBottom = progressBar.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        
        
        let fillPercentage = 0;
        if (progressBarTop < viewportHeight && progressBarBottom > 0) {
            const progressBarHeight = progressBarBottom - progressBarTop;
            const fillHeight = Math.min(progressBarHeight, viewportHeight - progressBarTop);
            fillPercentage = (fillHeight / progressBarHeight) * percentage;
        }
        
        progressBar.querySelector('.fill').style.width = `${fillPercentage}%`;
    });
}

window.addEventListener('scroll', fillProgressBars);

fillProgressBars();






