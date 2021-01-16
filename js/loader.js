$(document).ready(()=>{
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300,
        easing:'easeOut',
        topOnEmptyHash: true,
        offset:100
    });
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton({
        hoverEnabled:false,
    });
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.slider').slider();
    $('input, textarea').characterCounter();
    
});

const sr = ScrollReveal({
    distance: '30px',
    duration: 2000,
    reset: true,
});
sr.reveal(`.land, .contact`, {
    origin: 'top',
    interval: 200,
});
sr.reveal(`.pr1, .pr3, .left-part`, {
    origin: 'left',
    interval: 200,
});
sr.reveal(`.pr2, .pr4, .collection`, {
    origin: 'right',
    interval: 200,
});