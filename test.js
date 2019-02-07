var tape = require('tape')
var queryPreperator = require('./index.js')

tape('queryPreperator - brackets - true', function (t) {
  queryPreperator('./some.txt', 'brackets', function (err, data) {

    function isbrackets (current) {
      return /^\[.+\]$/.test(current)
    }

    if (err) t.end(err)
    t.true(data, 'it is')
    t.true(data.split('\r\n').every(isbrackets), 'brackets')
    t.end()
  })
})

tape('queryPreperator - double quotes - true', function (t) {
  queryPreperator('./some.txt', 'quotation_double', function (err, data) {

    function isdoublequoted (current) {
      return /^\".+\"$/.test(current)
    }

    if (err) t.end(err)
    t.true(data)
    t.true(data.split('\r\n').every(isdoublequoted), 'double quoted')
    t.end()
  })
})
