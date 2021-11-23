var controller = new ScrollMagic.Controller()

var scene = new ScrollMagic.Scene({
    triggerElement: '.works'
})
.setClassToggle('.works', 'show')
.addTo(controller)

let listItems = [...document.querySelectorAll('.list')]

let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

let observer = new IntersectionObserver(showItem ,options)

function showItem(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // let letters = [...entry.target.querySelectorAll('.span-label')]
            // console.log(letters)
            // letters.forEach((letter, idx) =>{
            //     setTimeout(()=> {
            //         letter.classList.add('active')
            //     }, idx * 70)
            // })
            entry.target.children[0].classList.add('active')
        }
    })
    // console.log(entries)
}

listItems.forEach(item=>{
    // let newString =' '
    // let itemText = item.children[0].innerText.split('')
    // itemText.map(letter => (newString += letter == '' ? `<span class='gap'></span>'`: `<span> ${letter}</span>`))
    // item.innerHTML = newString
    observer.observe(item)
})