var $=document.querySelector.bind(document);
var $$=document.querySelectorAll.bind(document);

var navLinks=$$(' .nav-link')
var tabPane=$$('.tab-pane')

var line=$('.line')
console.log([tabPane])

navLinks.forEach((element,index) => {
    var tabPanes=tabPane[index]
    element.onclick=function(){
        
        $('.nav-link.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
       this.classList.add('active')
        tabPanes.classList.add('active')
       line.style.left=this.offsetLeft + 'px';
       line.style.width=this.clientWidth + 'px'


   }
});