// Animation With AOS Library
window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false })
})

// Change Basic Image When Click on the iphones
function changeImage (obj) {
    var bg = document.querySelector('.task-1')
    var img = document.querySelector('#basic-image')

    if(obj.id == 'gold') {
        img.src= './assets/imgs/gold.png'
        bg.style.backgroundColor = '#daa520c9'
    }
    else if(obj.id == 'blue') {
        img.src= './assets/imgs/blue.png'
        bg.style.backgroundColor = '#297cee'
    }
    else if(obj.id == 'black') {
        img.src= './assets/imgs/black.png'
        bg.style.backgroundColor = '#e14def'
    }
    else if(obj.id == 'white') {
        img.src= './assets/imgs/white.png'
        bg.style.backgroundColor = '#466c94'
    }
    else {
        img.src= './assets/imgs/red.png'
        bg.style.backgroundColor = '#fb5b8f'
    }
}

// Change Mood 
function changeMood(obj) {
    var task_2 = document.getElementById('task-2')
    var text = document.querySelectorAll('.text')

    console.log(text)

    if (task_2.classList.contains('darkmood')) { 
        task_2.classList.remove('darkmood')
        text.forEach(e => {e.classList.remove('darkmood')})
        obj.classList.add('fa-moon')
        obj.classList.remove('fa-sun')
        obj.style.color = '#2557ab'
    } 
    else {
        task_2.classList.add('darkmood')
        text.forEach(e => {e.classList.add('darkmood')})
        obj.classList.add('fa-sun')
        obj.classList.remove('fa-moon')
        obj.style.color = '#f4f6f7'
    }
}

// Open Accordion 
function openAccordion(obj) {
    var p = obj.nextElementSibling.nextElementSibling

    if(obj.classList.contains('fa-chevron-up')) {
        obj.classList.remove('fa-chevron-up')
        obj.classList.add('fa-chevron-down')
        p.classList.add('hide')
    }
    else {
        obj.classList.add('fa-chevron-up')
        obj.classList.remove('fa-chevron-down')
        p.classList.remove('hide')
    }
}

// Rating 
function rating(obj) {
    var rate = document.querySelectorAll('.star')
    var star = obj
    var counter = 0

    for (var i = 0; i < rate.length; i++) {
        counter ++
        if(rate[i] === star ) {
            for (var j = 0; j < counter; j++)
                rate[j].style.color="#fdd804"
        }
        else {
            rate[i].style.color="#000"
        }
        
    }
    
}

