Reveal.addEventListener('slidechanged', function (event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var header = document.getElementById("zuehlke-header"),
        title = event.currentSlide.attributes.getNamedItem('data-title') || event.currentSlide.parentNode.attributes.getNamedItem('data-title'),
        parallaxStep = event.currentSlide.attributes.getNamedItem('data-parallax-step');
    
    if (title) {
        header.classList.remove('hide');
        header.innerHTML = title.value;
    } else {
        header.classList.add('hide');
    }

    if (parallaxStep) {
        var parallaxOffset = 200;

        var backgroundXDelta = parallaxStep.value * parallaxOffset;
        document.body.style.setProperty('background-position', '-' + backgroundXDelta + 'px 0');
    } else {
        document.body.style.setProperty('backgroundPosition', '');
    }
});