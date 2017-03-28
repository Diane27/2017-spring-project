'use strict'

const messageMaxCharacters = 140
let yakkerSubmit = document.getElementById('yakker-submit')
let yakkerInput = document.getElementById('yakker-input')
let log = document.getElementById('log')
let wordCount = document.getElementById('word-count')

let sendYak = function () {
  console.log('sendYak')
  let newYak = document.createElement('p')
  let date = document.createElement('p')
  var time = new Date()
  newYak.innerText = yakkerInput.value
  date.innerText = time.getHours() + ':' + time.getMinutes()
  date.style.fontSize = '10px'
  date.style.margin = '0px'
  date.style.padding = '0px'
  newYak.appendChild(date)
  newYak.style.padding = '10px'
  newYak.style.borderRadius = '5px'
  newYak.addEventListener('click', function () {
    this.parentNode.removeChild(this)
  })
  newYak.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'lightpink'
  })
  newYak.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'white'
  })
  yakkerInput.value = ''
  wordCount.innerText = messageMaxCharacters
  log.prepend(newYak)
}
let disableSubmit = function (button) {
  button.disabled = true
  button.style.backgroundColor = 'skyblue'
  button.style.borderColor = 'skyblue'
  button.style.cursor = 'default'
}
let enableSubmit = function (button) {
  button.disabled = false
  button.style.backgroundColor = 'rgb(30, 174, 219)'
  button.style.borderColor = 'rgb(30, 174, 219)'
  button.style.cursor = 'pointer'
}

yakkerInput.disabled = false

yakkerSubmit.addEventListener('mouseenter', function () {
  if (this.disabled === false) {
    this.style.backgroundColor = 'rgb(51, 195, 240)'
    this.style.borderColor = 'rgb(51, 195, 240)'
  }
})
yakkerSubmit.addEventListener('mouseleave', function () {
  if (this.disabled === false) {
    this.style.backgroundColor = 'rgb(30, 174, 219)'
    this.style.borderColor = 'rgb(30, 174, 219)'
  }
})
yakkerSubmit.addEventListener('click', function () {
  console.log('yakkerSubmit.click')
  sendYak()
})
yakkerInput.addEventListener('keydown', function (event) {
  console.log('yakkerInput.input')
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    sendYak()
    return
  }
  if (yakkerInput.value.length === 0) disableSubmit(yakkerSubmit)
  if (yakkerInput.value.length >= 140) {
    wordCount.innerText = 0
    disableSubmit(yakkerSubmit)
    return
  } else yakkerSubmit.disabled = false
  wordCount.innerText = messageMaxCharacters - yakkerInput.value.length
  enableSubmit(yakkerSubmit)
})

if (yakkerInput.value.length === 0) disableSubmit(yakkerSubmit)
