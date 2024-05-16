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







let currentSlide = 0;

const changeSlide = (index) => {
    
    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        square.classList.remove('active');
    });
    
    squares[index - 1].classList.add('active');

    const dImage = document.querySelector('.d3-image');
    const roleText = document.querySelector('.role');
    const nameText = document.querySelector('.name');

    switch (index) {
        case 1:
            dImage.src = "assets/images/d3.svg";
            roleText.textContent = "Graphic Designer";
            nameText.textContent = "Mau Thomas";
            break;
        case 2:
            dImage.src = "assets/images/d4.svg";
            roleText.textContent = "Illustrator";
            nameText.textContent = "Mark Hill";
            break;
        case 3:
            dImage.src = "assets/images/d5.svg";
            roleText.textContent = "Photographer";
            nameText.textContent = "Nick Williams";
            break;
        default:
            break;
    }
};

const autoChangeSlide = () => {
    setInterval(() => {
        currentSlide = (currentSlide % 3) + 1; 
        changeSlide(currentSlide); 
    }, 5000); 
};


autoChangeSlide();