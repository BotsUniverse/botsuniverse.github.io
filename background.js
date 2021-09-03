const background = document.getElementById('background');

for (var i = 0; i < 100; i ++){
  var star = document.createElement('div');
  star.className="star";
  background.append(star)
}


function animate2(){
  anime({
    targets: '.star',
    translateY: function(){
      return anime.random(-(window.innerHeight/1.6), (window.innerHeight/1.6))
    },
    translateX: function(){
      return anime.random(-(window.innerWidth/1.6), (window.innerWidth/1.6))
    },
    delay: anime.stagger(1),
    easing: "linear",
    duration: 100000,
    complete: animate2
  })
}




function animate(){
  anime({
    targets: '.star',
    translateY: function(){
      return anime.random(-window.innerHeight/2, window.innerHeight/2)
    },
    translateX: function(){
      return anime.random(-window.innerWidth/2, window.innerWidth/2)
    },
    delay: anime.stagger(1),
    complete: animate2
  })
}

setTimeout(
  animate,
  1000
)