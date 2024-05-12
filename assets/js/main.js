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


const progressBar = document.querySelector('.progress-bar');


function fillProgressBar() {
    
    const section = document.querySelector('.satisfaction-section');
    const sectionTop = section.getBoundingClientRect().top;

    
    if (sectionTop <= window.innerHeight && sectionTop >= 0) {
        
        progressBar.style.width = '100%';
        
        window.removeEventListener('scroll', fillProgressBar);
    }
}


window.addEventListener('scroll', fillProgressBar);