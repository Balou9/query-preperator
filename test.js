var tape = require('tape')
var queryPreperator = require('./index.js')

// test for every item has comma except index 0

tape('queryPreperator - brackets - true', function (t) {
  queryPreperator('./some.txt', 'brackets', false, function (err, data) {

    function isbrackets (current) {
      return /^,?\[.*\]$/.test(current)
    }

    if (err) t.end(err)
    t.true(data, 'true')
    t.true(data.split('\r\n').every(isbrackets), 'isbrackets')
    t.end()
  })
})

tape('queryPreperator - double quotes - true', function (t) {
  queryPreperator('./some.txt', 'double quotes', false, function (err, data) {

    function isdoublequoted (current) {
      return /^,?\".*\"$/.test(current)
    }

    if (err) t.end(err)
    t.true(data, 'true')
    t.true(data.split('\r\n').every(isdoublequoted), 'is double quoted')
    t.end()
  })
})
