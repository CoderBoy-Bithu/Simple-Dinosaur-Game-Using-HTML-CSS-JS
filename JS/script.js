var charecter = document.getElementById("charecter");
var block = document.getElementById("block");
count = 0
document.onkeydown = function(e){

  if(e.code == 'Space'){
     charecter.classList.add('animate')
      setTimeout(() => {
        charecter.classList.remove('animate')
      },500)
    }
  }

var checkdead = setInterval(function(){
  let ctop = parseInt(window.getComputedStyle(charecter).getPropertyValue('top'));
  let bleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
 if (bleft<20  && bleft>0 && ctop>=130) {
     block.style.animation = 'none';
     block.style.display = 'none';
     alert('U lose')
 }
},10)