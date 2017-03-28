'use strict'
/* global location global $ */

console.log('yakker.js loaded')
$('form').on('submit', function () {
  console.log('form submit')
  // let text = $('form input')
  // let message = {message: text.val()}
  // $.ajax({
  //   type: 'POST',
  //   url: '/',
  //   data: message,
  //   success: function (data) { location.reload() }
  // })
  return false
})
