//adding plus or minus sign to the faq
var btn = document.querySelectorAll('.QandA .btn');
for(var i = 0; i < btn.length ; i++){
    btn[i].addEventListener('click',function(){
        if(this.getAttribute('aria-expanded') == 'false'){
            this.lastChild.classList.remove('fa-plus-square');
            this.lastChild.classList.add('fa-minus-square')
        }else{
            this.lastChild.classList.remove('fa-minus-square');
            this.lastChild.classList.add('fa-plus-square')        
        }
    })
}

$('.owl-carousel').owlCarousel({
    items : 3,
    autoplay : true,
    loop : true,
    dots : true,
    dotsEach : 1
    
});