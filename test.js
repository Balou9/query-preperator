var fs = require('fs')
var tape = require('tape')
var queryPreperator = require('./index.js')
var file = './some.txt'

tape('queryPreperator - brackets - pass pt1', function (t) {
  queryPreperator(file, 'brackets', false, function (err, data) {

    function isbrackets (str) {
      return /^\[.*\]$/s.test(str)
    }

    if (err) t.end(err)
    t.true(data, 'true')
    t.true(isbrackets(data), 'isbrackets')
    t.end()
  })
})

tape('queryPreperator - brackets + save file - pass pt2', function (t) {
  queryPreperator(file, 'brackets', true, function (err, data) {

    function isbrackets (str) {
      return /^\[.*\]$/s.test(str)
    }

    if (err) t.end(err)
    t.true(data, 'true')

    fs.readFile(file, function (err, data) {
      if (err) t.end(err)
      t.true(isbrackets(data))
      t.end()
    })
  })
})

tape('queryPreperator - double quotes - pass pt1', function (t) {
  queryPreperator(file, 'double quotes', false, function (err, data) {

    function isdoublequoted (str) {
      return /^\".*\"$/s.test(str)
    }

    if (err) t.end(err)
    t.true(data, 'true')
    t.true(isdoublequoted(data), 'is double quoted')
    t.end()
  })
})

tape('queryPreperator - double quotes + save file - pass pt2', function (t) {
  queryPreperator(file, 'double quotes', true, function (err, data) {

    function isdoublequoted (str) {
      return /^\".*\"$/s.test(str)
    }

    if (err) t.end(err)
    t.true(data, 'true')

    fs.readFile(file, function (err, data) {
      if (err) t.end(err)
      t.true(isdoublequoted(data))
      t.end()
    })
  })
})

tape('queryPreperator - file opt - fail pt1', function (t) {

    t.throws(queryPreperator.bind(null, 419, 'brackets', false), 'brackets is throwing')
    t.throws(queryPreperator.bind(null, 419, 'double quotes', false), 'double qoutes is throwing 2')
    t.end()

})

tape('queryPreperator - type opt - fail pt2', function (t) {

    t.throws(queryPreperator.bind(null, file, '419', false), 'brackets is throwing')
    t.throws(queryPreperator.bind(null, file, '419', false), 'double quotes is throwing 2')
    t.end()

})
