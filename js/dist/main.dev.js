"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// var controller = new ScrollMagic.Controller()
// var scene = new ScrollMagic.Scene({
//     triggerElement: '.works'
// })
// .setClassToggle('.works', 'show')
// .addTo(controller)
//TEXT ANIMATION
var listItems = _toConsumableArray(document.querySelectorAll('.list'));

var options = {
  rootMargin: '-10%',
  threshold: 0.0
};
var observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.children[0].classList.add('active');
    }
  }); // console.log(entries)
}

listItems.forEach(function (item) {
  observer.observe(item);
});
$(document).ready(function () {
  //CARD ANIMATION
  var cardWrapper = _toConsumableArray(document.querySelectorAll('.card-wrapper')); //console.log(cardWrapper)


  var controller = new ScrollMagic.Controller();
  $('.card').each(function () {
    console.log(this);
    var tlFirstScroll = new TimelineMax();
    tlFirstScroll.set('.card-wrapper', {
      scale: 2,
      transformOrigin: 'center top'
    }).to('.card-wrapper', 2, {
      scale: 1,
      y: '-50'
    }).to('.card-wrapper', 2, {
      scale: 1,
      y: '0%'
    }); //Scene 1

    var scene1 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0,
      duration: '80%'
    }).setTween(tlFirstScroll) // .addIndicators({
    //     name: 'wrapper scene',
    //     colorTrigger: 'purple'
    // })
    .addTo(controller);
  });
  var controller = new ScrollMagic.Controller();
  $(".card-wrapper").each(function () {
    var leftCard = $(this).find('.left-card');
    var rightCard = $(this).find('.right-card');
    var animateIn = new TimelineMax();
    animateIn.fromTo(leftCard, 2, {
      skewX: 0
    }, {
      skewX: 0,
      xPercent: 100,
      transformOrigin: "0% 100%",
      duration: 2.5,
      ease: "slow (0.7, 0.7, false)"
    }).from(rightCard, 1, {
      scaleY: 0
    }, "-=1.5"); //Make a scrollMagic scene

    var scene = new ScrollMagic.Scene({
      triggerHook: 0.25,
      triggerElement: this,
      duration: '0%'
    }) //.addIndicators({name: 'card'})
    .setTween(animateIn).addTo(controller);
  });
});