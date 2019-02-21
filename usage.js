var queryPreperator = require('./index.js')
var file = process.argv[2] || './lib/some.txt'
var preppedFileDoubleQuotes = './lib/some0.txt'
var preppedFileBrackets = './lib/some1.txt'

queryPreperator(preppedFileDoubleQuotes, 'double quotes', false, (err, data) => {
  if (err) throw err
  console.log(data)
})
