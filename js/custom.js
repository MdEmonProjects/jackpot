const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let birthday = "Sep 3, 2022 00:00:00",
countDown = new Date(birthday).getTime(),
x = setInterval(function() {    

let now = new Date().getTime(),
    distance = countDown - now;

  document.getElementById("hours").innerHTML = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes").innerHTML = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds").innerHTML = Math.floor((distance % (minute)) / second);


}, 0)

$('.relatedGamesSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: false,
        slidesToShow: 1,

      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: false,
        slidesToShow: 2,

      }
    },
  ]
});