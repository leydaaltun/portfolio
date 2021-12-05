// var controller = new ScrollMagic.Controller()

// var scene = new ScrollMagic.Scene({
//     triggerElement: '.works'
// })
// .setClassToggle('.works', 'show')
// .addTo(controller)


//TEXT ANIMATION

let listItems = [...document.querySelectorAll('.list')]

let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

let observer = new IntersectionObserver(showItem ,options)

function showItem(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting){

            entry.target.children[0].classList.add('active')
        }
    })
    // console.log(entries)
}

listItems.forEach(item=>{
    observer.observe(item)
})



//CARD ANIMATION
let cardWrapper = [...document.querySelectorAll('.card-wrapper')]
//console.log(cardWrapper)

var controller = new ScrollMagic.Controller()


var width = window.innerWidth,
    height = window.innerHeight;

$('.card').each(function(){
    

    

    var tlFirstScroll = new TimelineMax()
    tlFirstScroll
    .set('.card-wrapper', {scale:0.7, transformOrigin:'center'})
    .to('.card-wrapper', 2,{scale:1, y:'-50'})
    .to('.card-wrapper', 2, {scale: 1, y:'0%'})



     //Scene 1

    var scene1 = new ScrollMagic.Scene({
      offset: 100,
      triggerElement: this,
      triggerHook: 0,
      duration: '100%'
    })
    
    .setTween(tlFirstScroll)
    // .addIndicators({
    //     name: 'wrapper scene',
    //     colorTrigger: 'purple'
    // })
    .addTo(controller)

})



var controller = new ScrollMagic.Controller()


$(".card-wrapper").each(function(){
    let leftCard = $(this).find('.left-card');
    let rightCard = $(this).find('.right-card');


var animateIn = new TimelineMax()

animateIn
.fromTo(leftCard, 2,{skewX:0}, {skewX:0, xPercent: 100, transformOrigin: "0% 100%",duration:2.5, ease:"slow (0.7, 0.7, false)"})

.from( rightCard, 1, {scaleY:0}, "-=1.5")

//Make a scrollMagic scene

var scene = new ScrollMagic.Scene({
    offset: 150,
    triggerHook: 0.25,
    triggerElement: this,
    duration: '0%'
})
//.addIndicators({name: 'card'})
.setTween(animateIn).addTo(controller)

})



