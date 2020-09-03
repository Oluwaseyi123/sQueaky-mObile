function initMap() {
  let Lagos={
    lat: 3.3792,
    lng: 6.5244
  }
  let map = new google.maps.Map(document.getElementById("map"), {
    center: Lagos,
    zoom: 4
  });
  let marker=new google.maps.Marker({position: Lagos, map:map})
}

// window.onscroll = function() {stickyNav()};

// let navbar = document.querySelector("nav");
// // Get the offset position of the navbar
// let sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyNav() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
//}
