let hamberger = document.querySelector('.hamberger');
let close = document.querySelector('.close');
let mblNav = document.querySelector('.mbl-nav');

hamberger.addEventListener('click', function(){
 
    mblNav.classList.add('open');

});

close.addEventListener('click', function(){
    mblNav.classList.remove('open');

});