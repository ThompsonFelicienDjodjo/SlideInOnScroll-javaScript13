function debounce(func,wait=20, immediate= true) {
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context,args);
        };
        let callnow = immediate && !timeout;
        clearTimeout(tiemeout);
        tiemeout = setTimeout(later, wait);
        if (callnow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkslide(e) {
    //A mi-chemin de l'image
    console.log(window.scrollY);
    sliderImages.forEach( sliderImages => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImages.height/2;
        // le bas de l'image
        console.log(slideInAt);
        const imageBottom = sliderImages.offsetTop + sliderImages.height;
        const isHalfshown = slideInAt > sliderImages.offsetTop;
        const isNotscrolledpast = window.scrollY< imageBottom;
        if(isHalfshown && isNotscrolledpast) {
            sliderImages.classList.add('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkslide));