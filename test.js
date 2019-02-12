var tape = require('tape')
var queryPreperator = require('./index.js')

tape('queryPreperator - brackets - true', function (t) {
  queryPreperator('./some.txt', 'brackets', false, function (err, data) {

    function isbrackets (str) {
      return /^\[.*\]$/s.test(str)
    }

    if (err) t.end(err)
    t.true(data, 'true')
    t.true(isbrackets(data), 'isbrackets')
    t.end()
  })
})

tape('queryPreperator - double quotes - true', function (t) {
  queryPreperator('./some.txt', 'double quotes', false, function (err, data) {

    function isdoublequoted (str) {
      return /^\".*\"$/s.test(str)
    }

    if (err) t.end(err)
    t.true(data, 'true')
    t.true(isdoublequoted(data), 'is double quoted')
    t.end()
  })
})
