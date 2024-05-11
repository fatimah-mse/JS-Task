// Access To the Elements
let index = 0

// Animation With AOS Library
window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false })
})

// Animation With Typed JS Library
let typed = new Typed('.auto-type' ,
    {
        strings: ["Hello I'm Fatimah Mselmani" , "This is my 7th Task" , "To Display it click button"],
        typeSpeed: 100,
        backSpeed: 100,
        looped: true
    }) 

// Hide The Intro and Show the Part 1 of Task
function showTask () {
    var intro = document.getElementById('intro')
    var task = document.getElementById('show')
    intro.style.display = 'none'
    task.style.display = 'flex'
}

// Add Btn to show the next question when click on it
function addBtn() {
    const container = document.querySelector('.container')
    const next = document.querySelector('.next')
    if (!next) {
        container.innerHTML += `<button class="next" onclick="next(this)">show next question</button>`
    } 
}

// Show the next question
function next(obj) {
    const question = document.querySelectorAll('.question');
    n= document.querySelector('.next')
        if (n) {
            if (index < question.length - 1) {
                index++;
                question[index].classList.remove('hide');
            }
            obj.remove()
        }
}

// Create P For Results
function createP( data , text , classOrange = '' , delay = 0) {
    return `<p class="desc ${classOrange}" data-aos='${data}' data-aos-delay='${delay}'>${text}</p>`;
} 

// Function If inputs Null 
function isNull () {
    return createP('zoom-in', 'You Have To Fill Fileds For Display the result')
}

// Function remove p for null 
function removePforNull () {
    var desc = document.querySelectorAll('.desc')
    if(desc) {
        desc.forEach(e => {
            e.style.display =  'none'
        })
    }
}

// =========== Start Question 1 ===========

// Show The min and max number after click on the button with add a button to show the next question when click on it
    function min_max () {
        var max_min = document.getElementById('max-min')
        var first = document.getElementById('first')
        var second = document.getElementById('second')
        var third = document.getElementById('third')
        if (first.value ==='' || second.value ==='' || third.value ==='') {
            max_min.innerHTML += isNull()
        }
        else {
            removePforNull ()
            var max = Math.max(first.value , second.value , third.value)
            var min = Math.min(first.value , second.value , third.value)
            max_min.innerHTML += createP('zoom-in' , `the numbers you emtered them is : ${first.value} & ${second.value} & ${third.value}` , 'blue')
                              + createP('zoom-in' , `the max element : ${max}` , 50)
                              + createP('zoom-in' , `the max element : ${min}` , 50)
                              + createP('zoom-in' , 'you can test another numbers if you want' , 'orange' , 500)
            console.log('The max element is :' + Math.max(first.value , second.value , third.value))
            console.log('The min element is :' + Math.min(first.value , second.value , third.value))
            addBtn()
        }
}
// =========== End Question 1 ===========

// =========== Start Question 2 ===========
function vowel () {
    var vowel = document.getElementById('vowel')
    var v = document.getElementById('char').value
    if (v === '') {
        vowel.innerHTML += isNull()
    }
    else {
        removePforNull ()
        v.toLowerCase()
        if (v=='a' || v=='e' || v=='i' || v=='o' || v=='u') {
            console.log (v + " is a vowel character")
            vowel.innerHTML += createP('zoom-in' , `the character you emtered it is : ${v}` , 'blue')
                            + createP('zoom-in' , `${v} is a vowel character` , 50)
                            + createP('zoom-in' , 'you can test another characters if you want' , 'orange' , 500)
                            addBtn() 
        } 
        else if (v=='b' || v=='c' || v=='d' || v=='f' || v=='j'
                || v=='h' || v=='j' || v=='k' || v=='l' || v=='m'
                || v=='n' || v=='p' || v=='q' || v=='r' || v=='s'
                || v=='t' || v=='v' || v=='w' || v=='z' || v=='y' || v=='z'
            ) {
            console.log (v + " is a Consonant character")
            vowel.innerHTML += createP('zoom-in' , `the character you emtered it is : ${v}` , 'blue')
                            + createP('zoom-in' , `${v} is a Consonant character` , 50)
                            + createP('zoom-in' , 'you can test another characters if you want' , 'orange' , 500)
                            addBtn() 
        } 
        else {
            console.log ("you entered invalid character")
            vowel.innerHTML += createP(' ' , `the character you emtered it is : ${v}` , 'blue')
                            + createP(' ' , ' you entered invalid character ' , 'orange' )
        }
    }
}
// =========== End Question 2 ===========

// =========== Start Question 3 ===========
function multiplication() {
    var multi = document.getElementById('multi')
    var m = document.getElementById('multi-num').value
    var sum =''
    if (m === '') {
        multi.innerHTML += isNull()
    }
    else {
        removePforNull ()
        for (let index = 1; index <= 12; index++) {
            sum += (m * index)+' '
        }
        multi.innerHTML += createP('zoom-in' , `the number you emtered it is : ${m}` , 'blue')
                        + createP('zoom-in' , `${sum}` , 50)
                        + createP('zoom-in' , 'you can test another number if you want' , 'orange' , 500)
        console.log(sum)
        addBtn() 
    }
}
// =========== End Question 3 ===========

// =========== Start Question 4 ===========
function evenNumber() {
    var even = document.getElementById('even')
    var e = document.getElementById('even-num').value
    var sum =''
    if (e === '') {
        even.innerHTML += isNull()
    }
    else {
        removePforNull ()
        for (let index = 0; index < e; index++) {
            if( (index % 2) !== 0 ) {
                sum += index+' '
            }
        }
        even.innerHTML += createP('zoom-in' , `the number you emtered it is : ${e}` , 'blue')
                        + createP('zoom-in' , `${sum}` , 50)
                        + createP('zoom-in' , 'you can test another number if you want' , 'orange' , 500)
        console.log(sum)
        addBtn() 
    }
}
// =========== End Question 4 ===========

// =========== Start Question 5 ===========

function the_avg() {
    var m_avg = document.getElementById('avg')
    let first_num = document.getElementById('first-num')
    let second_num = document.getElementById('second-num')
    let third_num = document.getElementById('third-num')
    let fourth_num = document.getElementById('fourth-num')
    let fifth_num = document.getElementById('fifth-num')
    if (first_num.value === '' || second_num.value === '' || third_num.value === '' || fourth_num.value === '' || fifth_num.value === '') {
        m_avg.innerHTML += isNull()
    } 
    else {
        let x 
        let a
        let sum = 0
        removePforNull ()
        x = parseInt(first_num.value) + parseInt(second_num.value) + parseInt(third_num.value) + parseInt(fourth_num.value) + parseInt(fifth_num.value)
        sum += x
        a = sum / 5
        console.log('The Total marks of the Marks you Entered is : ' + sum)
        console.log('The Average is : ' + a)
        console.log('The Percentage is : ' + a + '%')
        m_avg.innerHTML += createP('zoom-in' , `the numbers you emtered them is : ${first_num.value} & ${second_num.value} & ${third_num.value} & ${fourth_num.value} & ${fifth_num.value}` , 'blue')
                        + createP('zoom-in' , `The Total marks of them is : ${sum}` , 50)
                        + createP('zoom-in' , `the average is : ${a}` , 50)
                        + createP('zoom-in' , `the percentage is : ${a}%` , 50)
                        + createP('zoom-in' , 'you can test another mark if you want' , 'orange' , 500)
        addBtn()
    }
}
// =========== End Question 5 ===========

// =========== Start Question 6 ===========

function grade() {
    var g = document.getElementById('grade')
    let physics = document.getElementById('physics')
    let chemistry = document.getElementById('chemistry')
    let biology = document.getElementById('biology')
    let mathematics = document.getElementById('mathematics')
    let computer = document.getElementById('computer')
    if (physics.value === '' || chemistry.value === '' || biology.value === '' || mathematics.value === '' || computer.value === '') {
        g.innerHTML += isNull()
    } 
    else {
        let x 
        let a
        let sum = 0
        removePforNull ()
        x = parseInt(physics.value) + parseInt(chemistry.value) + parseInt(biology.value) + parseInt(mathematics.value) + parseInt(computer.value)
        sum += x
        a = sum / 5
        if(a >= 90) {
            G = 'Grad A'
        }
        else if(a >= 80) {
            G = 'Grad B'
        }
        else if(a >= 70) {
            G = 'Grad C'
        }
        else if(a >= 60) {
            G = 'Grad D'
        }
        else if(a >= 40) {
            G = 'Grad E'
        }
        else  {
            G = 'Grad F'
        }
        console.log('The Total marks of the Marks you Entered is : ' + sum)
        console.log('The Average is : ' + a)
        console.log('The Percentage is : ' + a + '%')
        g.innerHTML += createP('zoom-in' , `the numbers you emtered them is : ${physics.value} & ${chemistry.value} & ${biology.value} & ${mathematics.value} & ${computer.value}` , 'blue')
                        + createP('zoom-in' , `The Total marks of them is : ${sum}` , 50)
                        + createP('zoom-in' , `the average is : ${a}` , 50)
                        + createP('zoom-in' , `the percentage is : ${a}% ${G}` , 50)
                        + createP(' ' , 'you can test another mark if you want' , 'orange' , 500)
    }
}
// =========== End Question 6 ===========