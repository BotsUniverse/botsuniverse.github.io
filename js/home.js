// const head = document.querySelector(".head");
// function scrollAnimeHead(e){
//   var scrollPercent = (parseInt(6-(window.scrollY/innerHeight)*10))/10;
//   console.log(scrollPercent);
//   if (scrollPercent >= 0.5){
//     head.style.opacity = 1;
//   }
//   else{
//     head.style.opacity = scrollPercent;
//   }
// }
// document.onscroll = scrollAnimeHead;


function toggleNav() {
  var dt = document.querySelector(".links");
  dt.toggleAttribute("dt")
}