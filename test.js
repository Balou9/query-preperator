var fs = require('fs')
var tape = require('tape')
var queryPreperator = require('./index.js')
var file = './some.txt'

tape('queryPreperator - brackets', function (t) {
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

tape('queryPreperator - brackets + save file', function (t) {
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

tape('queryPreperator - double quotes', function (t) {
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

tape('queryPreperator - double quotes + save file', function (t) {
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
