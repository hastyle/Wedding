$(function(){
  var headerWrapper = $('.header-wrapper'),
       headerParallex = headerWrapper.find('.header-parallex'),
      img1 = headerParallex.find('.img-1'),
      img2 = headerParallex.find('.img-2'),
      img3 = headerParallex.find('.img-3'),
      parallex = new TimelineMax(),
      parallexController = new ScrollMagic.Controller();

      parallex.to('.img-1', 1, {bottom:'70%', opacity:'0', ease:Power0.easeNone})
              .to('.img-2', 1, {top:'70%', opacity:'0', ease:Power0.easeNone}, '-=1')
              .to('.img-3', 1, {bottom:'90%', opacity:'0', ease:Power0.easeNone}, '-=1.2');

      var parallexScene = new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.header-wrapper', // what will trigger scene
        triggerHook: 0,
      })
    .setTween(parallex)
    //.addIndicators()
    .addTo(parallexController);


///////////////////////// Counter ///////////////////////////////////////////
  var options = {
    useEasing : true,
    useGrouping : true,
    separator : ',',
    decimal : '.',
    prefix : '',
    suffix : ''
    },
    demo = new CountUp("counter-1", 0, 52, 0, 3, options),
    demo2 = new CountUp("counter-2", 0, 23, 0, 3.5, options),
    demo3 = new CountUp("counter-3", 0, 55, 0, 4, options),
    fadein = new TimelineMax(),
    counterController = new ScrollMagic.Controller();
    fadein.from('.date-title', 1, {autoAlpha:0, y:20, ease:Power0.easeNone});
    fadein.from('.counter', 1, {autoAlpha:0, y:20, ease:Power0.easeNone}, '-=1');
    fadein.from('.counter-name', 1, {autoAlpha:0, y:20, ease:Power0.easeNone}, '-=1');
    var counterScene = new ScrollMagic.Scene({
      triggerElement: '#date',
      offset: -50,
      reverse: false,
    })
  .on('start', function(){
    demo.start();
    demo2.start();
    demo3.start();
  })
  .setTween(fadein)
  .addTo(counterController);


//////////////////// Slick Slider /////////////////////
$('.instagram-wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  //nextArrow: next,
  autoplay: true,
  autoplaySpeed: 2000,
});

//////////////////// RSVP /////////////////////

  var rsvpPicture = $('.picture'),
      rsvpController = new ScrollMagic.Controller(),
      rsvp = new TimelineMax(),
      rsvpAnimate = rsvp.to('.picture', 1, {top: 15, right: -50, rotation:22, ease: Power2.easeOut});
  var rsvpScene = new ScrollMagic.Scene({
        triggerElement: '.RSVP-wrapper .title',
        offset: -50,
        reverse: false,
      })
      .setTween(rsvpAnimate)
      .addTo(rsvpController);

//////////////////////// Menu ///////////////////////////////////////////////

  var nav = $('.navbar-wrapper'),
      navController = new ScrollMagic.Controller();
      var navScene = new ScrollMagic.Scene({
            triggerElement: ('.story-wrapper'),
            offset: -50,
            reverse: true,
          })
          .setClassToggle('.navbar-wrapper','sticky')
          .addTo(navController);
/////////////////// Arrow Up ///////////////////////
var arrowUp = $('#thankyou .icon');
  $('#thankyou .icon').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 3500);
    });

});
