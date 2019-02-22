var fs = require('fs')
var tape = require('tape')
var queryPreperator = require('./index.js')
var file = './lib/some.txt'
var preppedFileDoubleQuotes = './lib/some0.txt'
var preppedFileBrackets = './lib/some1.txt'
var file2test = './lib/some2test.txt'

var isBrackets = (str) => /^\[.*\]$/s.test(str)
var isDoubleQuoted = (str) => /^\".*\"$/s.test(str)

tape('queryPreperator - brackets - pass pt1', (t) => {
  queryPreperator(file, 'brackets', false, (err, data) => {
    if (err) t.end(err)
    t.true(data, 'true')
    t.true(isBrackets(data), 'isBrackets')
    t.end()
  })
})

tape('queryPreperator - brackets + save file - pass pt2', (t) => {
  fs.copyFile(file, file2test, (err) => {
    if (err) t.end(err)

    fs.readdir('./lib', (err, files) => {
      if (err) t.end(err)
      t.true(files.indexOf('some2test.txt') > 1, 'test file true')

      queryPreperator(file2test, 'brackets', true, (err, data) => {
        if (err) t.end(err)
        t.true(data)

        fs.readFile(file2test, (err, data) => {
          if (err) t.end(err)
          t.true(isBrackets(data), 'isBrackets')

          fs.unlink(file2test, (err) => {
            if (err) t.end(err)
            t.end()
          })
        })
      })
    })
  })
})

tape('queryPreperator - double quotes - pass pt3', (t) => {
  queryPreperator(file, 'double quotes', false, (err, data) => {
    if (err) t.end(err)
    t.true(data, 'true')
    t.true(isDoubleQuoted(data), 'is double quoted')
    t.end()
  })
})

tape('queryPreperator - double quotes + save file - pass pt4', (t) => {
  fs.copyFile(file, file2test, (err) => {
    if (err) t.end(err)

    fs.readdir('./lib', (err, files) => {
      if (err) t.end(err)
      t.true(files.indexOf('some2test.txt') > 1, 'test file true')

      queryPreperator(file2test, 'double quotes', true, (err, data) => {
        if (err) t.end(err)
        t.true(data)

        fs.readFile(file2test, (err, data) => {
          if (err) t.end(err)
          t.true(isDoubleQuoted(data), 'isDoubleQuoted')

          fs.unlink(file2test, (err) => {
            if (err) t.end(err)
            t.end()
          })
        })
      })
    })
  })
})

tape('queryPreperator - has been prepped already', (t) => {
  queryPreperator(preppedFileBrackets, 'brackets', false, (err, alreadyPreppedB) => {
    if (err) t.end(err)
    t.equal(alreadyPreppedB, 'File has already been prepped', 'brackets true')
    t.end()
  })
})



tape('queryPreperator - has been prepped already', (t) => {
  queryPreperator(preppedFileDoubleQuotes, 'double quotes', false, (err, alreadyPreppedDq) => {
    if (err) t.end(err)
    t.equal(alreadyPreppedDq, 'File has already been prepped', 'double quotes true')
    t.end()
  })
})

tape('queryPreperator - file opt - fail pt1', (t) => {

    t.throws(queryPreperator.bind(null, 419, 'brackets', false), 'brackets is throwing')
    t.throws(queryPreperator.bind(null, 419, 'double quotes', false), 'double qoutes is throwing 2')
    t.end()

})

tape('queryPreperator - type opt - fail pt2', (t) => {
    t.throws(queryPreperator.bind(null, file, '419', false), 'brackets is throwing')
    t.throws(queryPreperator.bind(null, file, '419', false), 'double quotes is throwing 2')
    t.end()

})
