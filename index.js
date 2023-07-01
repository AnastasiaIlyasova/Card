
//Modal window
let openImgSerene = document.getElementById("open-img-serene")
let openImgSanja = document.getElementById("open-img-sanja")
let openImgLucas = document.getElementById("open-img-lucas")
let openImgSaas = document.getElementById("open-img-saas")
let openImgNature = document.getElementById("open-img-nature")
let openImgMacbook = document.getElementById("open-img-macbook")

var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        return true; // close the modal
        return false; // nothing happens
    }
});

openImgSerene.addEventListener('click', function(){
  modal.setContent('<img src="img/serene.jpg" alt="">');
  modal.open()
})

openImgSanja.addEventListener('click', function(){
  modal.setContent('<img src="img/sanja.jpg"  alt="">');
  modal.open()
})

openImgLucas.addEventListener('click', function(){
  modal.setContent('<img src="img/portfolio.jpg"  alt="">');
  modal.open()
})

openImgSaas.addEventListener('click', function(){
  modal.setContent('<img src="img/saas.jpg"  alt="">');
  modal.open()
})

openImgNature.addEventListener('click', function(){
  modal.setContent('<img src="img/nature.jpg"  alt="">');
  modal.open()
})

openImgMacbook.addEventListener('click', function(){
  modal.setContent('<img src="img/MacBook.jpg" alt="">');
  modal.open()
})


  modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
    modal.close()
})

//Adaptive
window.addEventListener('resize', move);

function move(){
  const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (viewport_width <= 1040) {
document.getElementById("awards").innerHTML = "Awards <br> & <br> Recognitions";
  } 
  else{
    document.getElementById("awards").innerHTML = "Awards&Recognitions";
  }
}
move();

//Menu-burger
let burgerClick = document.getElementById("burger-click")
let menuAdaptive = document.getElementById("menu-adaptive")
burgerClick.addEventListener('click', function(e){
  menuAdaptive.classList.toggle('menu__active')
})
