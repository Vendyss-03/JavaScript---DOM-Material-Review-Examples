let name = 'Adam';

console.log(name + "'s apples")
console.log('Hello world!')

$('h1').text('JavaScript & DOM Material Review Examples')
$('p').html('StayAtHome Coding Camp, Likes: <strong>13</strong>')

$('strong').css('background', 'lime')
$('strong').css('padding', '10px')

let color = 'blue'

$('h2').toggleClass('color')
$('h2').toggleClass('color')


$('ul').append('<li>My name is ' + name + '</li>')
$('ul').append('<li id="special-list-item">Removable ' + name + '</li>')

$('#special-list-item').remove()

let addButtonHandler = (() => {
    if ($('li').length < 5) {
    $('ul').append('<li>My name is ' + name + '</li>')
    }
})

//další možnost, jak zapsat funkci:

// function addButtonHandler2() {
//     if ($('li').length < 5) {
//     $('ul').append('<li>My name is ' + name + '</li>')
//     }
// })



$('#add-button').click(addButtonHandler)

$('#remove-button').click(() => {
    $('li:last-child').remove()
})

//if (condition) ... condition = true/false, nebo &&, ||

let age = 12

console.log('Starting the if')
console.log('This is a sentence'.toLowerCase())

if (age < 18) {
    console.log('Not old enough to drink')
} else {
    console.log('Old enough to drink')
}

console.log('This is after the if') //



let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue']

$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors [0])

$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors [1])

$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors [2])

$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors [3])

$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors [4])

// loops: místo toho, abychom to museli takto vypisovat (viz výše) //

colors.push('aquamarine')

colors.forEach((color) => {
    $('#box-container').append('<div class="box"></div>')
    $('.box:last-child').css('background', color)
})

// i=index //

for (let i = 0; i < 100; i = i + 1) {
    console.log(i);
}






//This is a JavaScript comment ctrl+K+C

/*
    This is a multiline
    JavaScript comment
*/

// let age
// undefined
// age = 33
// 33
// age+5
// 38
// let name = Adam
// VM653:1 Uncaught ReferenceError: Adam is not defined
//     at <anonymous>:1:12
// (anonymous) @ VM653:1
// let name = "Adam"
// undefined
// name
// "Adam"
// "Adam's apples"
// "Adam's apples"
// name = "Peti"
// "Peti"
// name
// "Peti"
// let name = 'something'
// undefined
// age
// 33
// true
// true
// false
// false
// let oldEnoughToDrive = false
// undefined
// oldEnoughToDrive = true
// true
// age = 12
// 12
// name + 'else'
// "somethingelse"
// name + 'else' + name + age
// "somethingelsesomething12"
// 'adam' - 'apple'
// NaN
// true && true
// true
// false || true
// true
// true && (false || (true && false))
// false
// oldEnoughToDrive
// true
// !oldEnoughToDrive
// false
// let color1 = 'orange'
// undefined
// let color2 = 'blue'
// undefined
// let colors = ['orange', 'blue', 'green', 'purple']
// undefined
// colors
// (4) ["orange", "blue", "green", "purple"]
// colors [0]
// "orange"
// colors [3]
// "purple"
// colors.length
// 4
// colors.push('yellow')
// 5
// colors
// (5) ["orange", "blue", "green", "purple", "yellow"]
// [12, 54, 1212]
// (3) [12, 54, 1212]
// [true, false, true]
// (3) [true, false, true]
// [colors, colors, colors]
// (3) [Array(5), Array(5), Array(5)]
// colors
// (5) ["orange", "blue", "green", "purple", "yellow"]
// colors[2] = 'lime'
// "lime"
// colors
// (5) ["orange", "blue", "lime", "purple", "yellow"]
// [33, 'Adam', true]
// (3) [33, "Adam", true]


