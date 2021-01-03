$(document).ready(()=>{
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        easing:'easeInQuad',
        topOnEmptyHash: true,
    });
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.slider').slider();    
});

